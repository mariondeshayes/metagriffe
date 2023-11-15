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
    {name: 'h2', title: 'H2', type: 'string'},
    {
      name: 'services',
      title: 'Liste de services',
      type: 'array',
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
