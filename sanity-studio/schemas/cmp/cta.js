export default {
  name: 'cta',
  type: 'document',
  title: 'CTA Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h2',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant CTA`,
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
      name: 'text',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'btn',
      title: 'Bouton',
      type: 'object',
      fields: [
        {
          name: 'href',
          title: 'URL',
          type: 'string',
          description: 'Préférez une url relative pour les liens internes.',
        },
        {name: 'ancre', title: 'Texte', type: 'string'},
      ],
    },
  ],
}
