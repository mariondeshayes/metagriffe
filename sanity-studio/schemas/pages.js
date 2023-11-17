export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug',
    },
    prepare(selection) {
      let {title, subtitle} = selection
      if (subtitle == undefined) {
        subtitle = ''
      }
      return {
        title: `${title}`,
        subtitle: `slug: ${subtitle}`,
      }
    },
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom de la page',
      group: 'seo',
      description: "Ce paramètre n'est utilisé que dans le CMS et ne change pas le slug",
      validation: (Rule) => Rule.required().warning('Le nom de la page est obligatoire'),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'seo',
      description: '"- Architéa" sera rajouté à la fin du title',
      validation: (Rule) => Rule.required().warning('Le title est obligatoire'),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      group: 'seo',
      validation: (Rule) => Rule.required().warning('La description est obligatoire'),
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug de la page',
      description: "L'URL après https://www.monsiteweb.fr/",
      group: 'seo',
    },
    {
      name: 'robots',
      type: 'string',
      title: 'Robots',
      initialValue: 'index, follow',
      group: 'seo',
    },
    {
      name: 'canonical',
      type: 'string',
      title: 'Canonique',
      description: "si vide, la canonique sera l'url de la page",
      group: 'seo',
    },
    {
      name: 'ogimage',
      type: 'image',
      title: 'OpenGraph Image',
      description: '1200x630 px',
      group: 'seo',
    },
    {
      name: 'schema',
      type: 'text',
      title: 'Schema',
      group: 'seo',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
        {type: 'block'},
        {type: 'hero'},
        {type: 'valeurs'},
        {type: 'services'},
        {type: 'feature'},
        {type: 'cta'},
        {type: 'title'},
        {type: 'faq'},
        {type: 'contact'},
      ],
    },
  ],
}
