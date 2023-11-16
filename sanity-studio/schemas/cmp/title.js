export default {
  name: 'title',
  type: 'document',
  title: 'Title Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h1',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Titre`,
        subtitle: `${subtitle ? subtitle : ''}`,
      }
    },
  },
  fields: [
    {
      name: 'h1',
      title: 'H1',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Le H1 est obligatoire'),
    },
    {
      name: 'text',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
