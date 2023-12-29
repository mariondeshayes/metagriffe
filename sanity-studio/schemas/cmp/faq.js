export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h2',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant FAQ`,
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
    },
    {
      name: 'questions',
      title: 'Liste de Q&As',
      type: 'array',
      validation: (Rule) =>
        Rule.min(2).warning('Au moins 2 questions nécessaires pour ce composant'),
      of: [
        {
          name: 'qa',
          title: 'Question & Réponse',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Réponse',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
