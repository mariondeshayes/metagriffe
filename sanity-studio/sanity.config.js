import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
// Define the singleton document types
const singletonTypes = new Set(['global'])

export default defineConfig({
  name: 'default',
  title: 'template-writer',

  projectId: 'dtm1se4w',
  dataset: 'production',

  plugins: [
    colorInput(),
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Global').id('322b9c63-9ea5-4deb-8ddf-f8d1e476da33').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType('global')
                .documentId('322b9c63-9ea5-4deb-8ddf-f8d1e476da33')
                .title('Configuration globale du site'),
            ),

            // Regular document types
            S.documentTypeListItem('page').title('Pages'),
            S.documentTypeListItem('post').title('Articles de blog'),
          ]),
    }),
    ,
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
