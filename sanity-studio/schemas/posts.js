const query = encodeURIComponent('*[_type == "global"]{cat}')
const url = `https://${process.env.SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.SANITY_STUDIO_DATASET}?query=${query}`
// fetch the content

const data = await fetch(url)
  .then((res) => res.json())
  .then(({result}) => {
    return result[0]
  })

export default {
  name: 'post',
  type: 'document',
  title: 'Articles de blog',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'networks',
      title: 'Réseaux Sociaux',
    },
  ],
  preview: {
    select: {
      title: 'h1',
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
      name: 'h1',
      type: 'string',
      title: "H1 de l'article",
      description: "Sera affiché dans la carte de l'article sur la page blog",
      validation: (Rule) => Rule.required().warning('Le h1 de la page est obligatoire'),
    },
    {
      name: 'abstract',
      type: 'array',
      title: "Résumé de l'article",
      description: "Sera affiché dans la carte de l'article sur la page blog",
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().warning('Le résumé de la page est obligatoire'),
    },
    {
      name: 'img',
      title: "Image d'illustration de l'article",
      type: 'image',
      fields: [{name: 'alt', title: 'Texte alternatif', type: 'string'}],
      description: "Sera affiché dans la carte de l'article sur la page blog",
      validation: (Rule) => Rule.required().warning("L'image de la page est obligatoire"),
    },
    {
      name: 'cat',
      title: "Catégories de l'article",
      description: "Pensez à recharger la page si toutes les catégories n'apparaissent pas",
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: data.cat,
      },
    },
    {
      name: 'twitterText',
      title: 'Contenu du post sur X (Twitter)',
      description: '280 caractères max',
      group: 'networks',
      type: 'text',
      validation: (Rule) =>
        Rule.max(280).warning('Le contenu du post est trop long (max 280 caractères)'),
    },
    {
      name: 'twitterHashtags',
      title: 'Liste de #hashtags pour le post',
      description: 'Liste de #hashtags séparés par une virgule',
      type: 'string',
      group: 'networks',
      validation: (Rule) =>
        Rule.regex(/^[^\s,]+(?:,\s*[^\s,]+)*$/, {
          name: 'comma separated', // Error message is "Does not match email-pattern"
          invert: false, // Boolean to allow any value that does NOT match pattern
        }),
    },
    {
      name: 'pinterestDescription',
      title: "Description de l'épingle Pinterest",
      description: '500 caractères max',
      group: 'networks',
      type: 'text',
      validation: (Rule) =>
        Rule.max(500).warning('La description est trop longue (max 500 caractères)'),
    },
    {
      name: 'mailObject',
      title: "L'object du mail",
      group: 'networks',
      type: 'string',
    },
    {
      name: 'mailBody',
      title: 'Le corps du mail',
      group: 'networks',
      type: 'text',
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
        {type: 'etapes'},
        {type: 'allposts'},
        {type: 'testimonials'},
        {type: 'threeposts'},
      ],
    },
  ],
}
