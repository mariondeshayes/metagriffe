import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {dashboardTool} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
// Define the singleton document types
const singletonTypes = new Set(['global'])

export default defineConfig({
  name: 'default',
  title: 'vitrine-blog-brutalism-2023',

  projectId: `${process.env.SANITY_STUDIO_PROJECT_ID}`,
  dataset: `${process.env.SANITY_STUDIO_DATASET}`,

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
    media(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Déployer sur Netlify',
          sites: [
            {
              title: 'Website',
              apiId: '915176c4-f630-4386-828b-d765959cd3fa',
              buildHookId: '65946c08e1f7890b17f1d149',
              name: 'startling-blini-306276',
              url: 'https://startling-blini-306276.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({schemaType}) => schemaType == 'page' || schemaType == 'post'),
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
