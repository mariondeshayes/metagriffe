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
      name: 'lvl',
      title: 'Niveau du titre',
      type: 'string',
      options: {
        list: [
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'H5', value: 'h5'},
          {title: 'H6', value: 'h6'},
          {title: 'p', value: 'p'},
        ],
      },
    },
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
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
      validation: (Rule) =>
        Rule.required().max(4).warning("Le nombre d'étapes doit être compris entre 1 et 4."),
    },
  ],
}
