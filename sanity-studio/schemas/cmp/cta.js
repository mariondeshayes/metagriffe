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
    {name: 'h2', title: 'H2', type: 'string'},
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
        {name: 'href', title: 'URL', type: 'string'},
        {name: 'ancre', title: 'Texte', type: 'string'},
      ],
    },
  ],
}
