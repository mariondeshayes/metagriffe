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
    {name: 'h2', title: 'H2', type: 'string'},
    {
      name: 'valeurs',
      title: 'Liste de valeurs',
      type: 'array',
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
