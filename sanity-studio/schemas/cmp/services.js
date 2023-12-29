export default {
  name: 'services',
  type: 'document',
  title: 'Services Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h2',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Services`,
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
      name: 'services',
      title: 'Liste de services',
      type: 'array',
      validation: (Rule) =>
        Rule.min(2).warning('Au moins 2 services nécessaires pour ce composant'),
      of: [
        {
          name: 'service',
          title: 'Service',
          type: 'object',
          fields: [
            {
              name: 'img',
              title: 'Image',
              type: 'image',
              fields: [{name: 'alt', title: 'Texte alternatif', type: 'string'}],
            },
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
            {
              name: 'href',
              type: 'reference',
              title: 'Choix de la page',
              to: [{type: 'page'}],
            },
            {
              name: 'ancre',
              type: 'string',
              title: 'Ancre du lien',
            },
          ],
        },
      ],
    },
  ],
}
