export default {
  name: 'valeurs',
  type: 'document',
  title: 'Valeurs Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h2',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Valeurs`,
        subtitle: `${subtitle ? subtitle : ''}`,
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
      validation: (Rule) => Rule.required().warning('Le titre est obligatoire'),
    },
    {
      name: 'valeurs',
      title: 'Liste de valeurs',
      type: 'array',
      validation: (Rule) => Rule.min(1).warning('Au moins 1 valeur nécessaire pour ce composant'),
      of: [
        {
          name: 'valeur',
          title: 'Valeur',
          type: 'object',
          fields: [
            {
              name: 'h3',
              title: 'Titre (H3)',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
