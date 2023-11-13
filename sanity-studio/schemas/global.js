export default {
  name: 'global',
  type: 'document',
  title: 'Configuration globale du site',
  groups: [
    {name: 'seo', title: 'SEO'},
    {name: 'menu', title: 'Menu'},
    {name: 'theme', title: 'Thème'},
  ],
  fields: [
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
      title: 'Couleur accentuation 1',
    },
    {
      type: 'color',
      name: 'accent2Color',
      group: 'theme',
      title: 'Couleur accentuation 2',
    },
    {
      type: 'text',
      name: 'font',
      group: 'theme',
      title: 'Typographie',
      description: 'copier ici le CSS de fontsource.org',
    },
    {
      name: 'titleExtension',
      title: 'À ajouter à la fin de la balise "title"',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'ogImageFallback',
      title: 'image OG utilisée par défaut',
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
