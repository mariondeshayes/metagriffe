export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Section',
  preview: {
    select: {
      title: 'cmp',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Composant Contact`,
      }
    },
  },
  fields: [
    {
      name: 'prenom',
      type: 'object',
      title: 'Prénom',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
    },
    {
      name: 'nom',
      type: 'object',
      title: 'Nom',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
    },
    {
      name: 'societe',
      type: 'object',
      title: 'Société',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
    },
    {
      name: 'email',
      type: 'object',
      title: 'Email',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
    },
    {
      name: 'message',
      type: 'object',
      title: 'Message',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
    },
    {
      name: 'rgpd',
      type: 'text',
      title: 'texte RGPD',
    },
    {
      name: 'btn',
      type: 'string',
      title: 'texte bouton Envoyer',
    },
    {
      name: 'success',
      type: 'string',
      title: "Message d'envoi réussi",
    },
  ],
}
