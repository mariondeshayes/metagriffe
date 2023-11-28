export default {
  name: 'etapes',
  type: 'document',
  title: 'Etapes Section',
  preview: {
    select: {
      title: 'cmp',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Composant Etapes`,
      }
    },
  },
  fields: [
    {
      name: 'h2',
      title: 'H2',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Le H2 est obligatoire'),
    },
    {
      name: 'etapes',
      title: 'Étapes',
      type: 'array',
      of: [
        {
          name: 'etape',
          title: 'Étape',
          type: 'object',
          fields: [
            {
              name: 'h3',
              type: 'string',
              title: 'H3',
            },
            {
              name: 'text',
              title: 'Texte',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
