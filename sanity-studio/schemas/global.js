export default {
  name: 'global',
  type: 'document',
  title: 'Configuration globale du site',
  groups: [
    {name: 'blog', title: 'Blog'},
    {name: 'seo', title: 'SEO'},
    {name: 'menu', title: 'Menu'},
    {name: 'theme', title: 'Thème'},
    {name: 'social', title: 'Réseaux Sociaux'},
  ],
  fields: [
    {
      name: 'redirects',
      type: 'array',
      title: 'Redirections',
      of: [
        {
          name: 'redirect',
          type: 'object',
          title: 'Redirection',
          fields: [
            {name: 'from', title: 'Depuis', type: 'string'},
            {name: 'to', title: "Jusqu'à", type: 'string'},
            {name: 'code', title: 'Code de Statut', type: 'string', description: '301 par défaut'},
            {
              name: 'force',
              title: 'Force',
              type: 'boolean',
              description: "forcer la redirection d'une page qui existe",
              initialValue: false,
            },
          ],
        },
      ],
      group: 'seo',
    },
    {
      name: 'cat',
      type: 'array',
      title: 'Catégories des articles de blog',
      of: [{type: 'string'}],
      groupe: 'blog',
    },
    {
      name: 'networks',
      type: 'array',
      title: 'Réseaux sociaux',
      description: 'Téléverser une image svg',
      group: 'social',
      of: [
        {
          name: 'network',
          type: 'object',
          title: 'Réseau social',
          fields: [
            {name: 'nom', type: 'string', title: 'Nom du réseau social'},
            {name: 'url', type: 'string', title: 'URL du lien'},
            {
              name: 'svg',
              type: 'image',
              title: 'Icone',
              options: {
                accept: 'image/svg+xml',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      description: 'rendu en 100px x 100px',
      type: 'image',
      group: 'theme',
    },
    {
      type: 'color',
      name: 'textColor',
      group: 'theme',
      title: 'Couleur du texte',
      description: 'Pour les paragraphes et titres Hn',
    },
    {
      type: 'color',
      name: 'bgColor',
      group: 'theme',
      title: 'Couleur du fond',
    },
    {
      type: 'color',
      name: 'accent1Color',
      group: 'theme',
      title: 'Couleur accentuation',
      description: 'Appliquée à différents éléments du site dont le fond du CTA',
    },
    {
      type: 'text',
      name: 'font',
      group: 'theme',
      title: 'Typographie',
      description:
        'copier ici le CSS de fontsource.org. Si 2 polices de caractères, la première servira pour le corps du texte et la deuxième pour les titres.',
    },
    {
      name: 'favSVG',
      title: 'favicon SVG',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/svg+xml',
      },
    },
    {
      name: 'favmask',
      title: 'favicon Safari Pinned Tab',
      description: 'Le SVG doit être noir sur un fond transparent',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/svg+xml',
      },
    },
    {
      name: 'favtouch',
      title: 'favicon pour iOS',
      description: 'PNG de 180x180',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/png',
      },
    },
    {
      name: 'fav16',
      title: 'favicon 16x16 / anciens navigateurs',
      description: 'PNG de 16x16',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/png',
      },
    },
    {
      name: 'fav32',
      title: 'favicon 32x32 / anciens navigateurs',
      description: 'PNG de 32x32',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/png',
      },
    },
    {
      name: 'favico',
      title: 'favicon format ico / anciens navigateurs',
      description: 'ico 32x32',
      type: 'file',
      group: 'theme',
      options: {
        accept: '.ico',
      },
    },
    {
      name: 'favchrome',
      title: 'favicon pour le manifest PWA',
      description: 'PNG de 512x512',
      type: 'image',
      group: 'theme',
      options: {
        accept: 'image/png',
      },
    },
    {
      name: 'titleExtension',
      title:
        'À ajouter à la fin de la balise "title". Laisser vide si vous ne voulez pas insérer le nom de votre site dans les titles',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'ogImageFallback',
      title: 'Image utilisée par défaut lors du partage sur les réseaux sociaux.',
      type: 'image',
      group: 'seo',
    },
    {
      name: 'themeColor',
      title: 'Couleur utilisée dans la thématisation des navigateurs',
      type: 'color',
      group: 'seo',
    },
    {
      name: 'legalUrl',
      type: 'reference',
      title: 'Choix de la page Mentions légales',
      to: [{type: 'page'}],
      group: 'menu',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Items du menu',
      group: 'menu',
      of: [
        {
          name: 'link',
          type: 'object',
          title: 'Item du menu',
          fields: [
            {name: 'nom', type: 'string', title: 'Nom du lien'},
            {name: 'url', type: 'reference', title: 'URL du lien', to: [{type: 'page'}]},
            {
              name: 'subpages',
              type: 'array',
              title: 'Sous-pages',
              of: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Item du sous-menu',
                  fields: [
                    {name: 'nom', type: 'string', title: 'Nom du lien'},
                    {name: 'url', type: 'reference', title: 'URL du lien', to: [{type: 'page'}]},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
