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
          validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
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
          validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
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
          validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
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
          validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
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
          validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
        },
      ],
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
    },
    {
      name: 'rgpd',
      type: 'text',
      title: 'texte RGPD',
      description:
        "Ce texte doit préciser ce que vous allez faire des données personnelles récoltées via le formulaire de contact. L'utilisateur doit cocher pour accepter ce traitement.",
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
    },
    {
      name: 'btn',
      type: 'string',
      title: 'texte bouton Envoyer',
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
    },
    {
      name: 'success',
      type: 'string',
      title: "Message d'envoi réussi",
      validation: (Rule) => Rule.required().warning('Le champ est obligatoire'),
    },
  ],
}
