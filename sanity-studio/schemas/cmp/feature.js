export default {
  name: 'feature',
  type: 'document',
  title: 'Feature Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h2',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Feature`,
        subtitle: `${subtitle ? subtitle : ''}`,
      }
    },
  },
  fields: [
    {name: 'h2', title: 'H2', type: 'string'},
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
}
