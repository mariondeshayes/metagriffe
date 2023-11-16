export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'h1',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Hero`,
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
      name: 'p',
      title: 'Texte',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      fields: [{name: 'alt', title: 'Texte alternatif', type: 'string'}],
      validation: (Rule) => Rule.required().warning("L'image est obligatoire"),
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
