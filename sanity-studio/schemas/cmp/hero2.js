export default {
  name: 'blocImg',
  type: 'document',
  title: 'Bloc Image',
  preview: {
    select: {
      title: 'cmp',
      subtitle: 'titre',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Composant Bloc Image`,
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
      name: 'color',
      title: 'Couleur du texte',
      type: 'string',
      options: {
        list: [
          {title: 'Couleur du texte', value: 'text-[var(--textColor)]'},
          {title: 'Couleur du fond', value: 'text-[var(--bgColor)]'},
          {title: 'Couleur accent', value: 'text-[var(--accent1Color)]'},
        ],
      },
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      fields: [{name: 'alt', title: 'Texte alternatif', type: 'string'}],
      validation: (Rule) => Rule.required().warning("L'image est obligatoire"),
    },
    {
      name: 'height',
      title: "Hauteur de l'image",
      type: 'string',
      options: {
        list: [
          {title: '100%', value: 'h-screen'},
          {title: '75%', value: 'h-[75vh]'},
          {title: '50%', value: 'h-[50vh]'},
          {title: '25%', value: 'h-[25vh]'},
        ],
      },
    },
  ],
}
