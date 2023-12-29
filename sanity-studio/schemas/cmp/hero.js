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
