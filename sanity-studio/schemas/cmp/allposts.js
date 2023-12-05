export default {
  name: 'allposts',
  type: 'document',
  title: 'Liste de tous les posts',
  preview: {
    select: {
      title: 'cmp',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Composant Liste de tous les posts`,
      }
    },
  },
  initialValue: {
    size: false,
  },
  fields: [
    {
      name: 'size',
      title: 'Carte XL ?',
      description: 'Le premier post est mis en exergue avec son résumé.',
      type: 'boolean',
    },
  ],
}
