export default {
  name: 'threeposts',
  type: 'document',
  title: '3 posts de blog',
  preview: {
    select: {
      title: 'cmp',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Composant 3 posts de blog`,
      }
    },
  },
  fields: [
    {
      name: 'posts',
      title: 'Un groupe de (maximum) 3 posts',
      type: 'array',
      of: [
        {
          title: 'post',
          name: 'ref',
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.max(3).warning('Pas plus de 3 éléments'),
    },
  ],
}
