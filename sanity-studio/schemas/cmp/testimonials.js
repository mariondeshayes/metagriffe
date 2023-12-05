export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  preview: {
    select: {
      title: 'cmp',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Composant Testimonials`,
      }
    },
  },
  fields: [
    {
      name: 'testimonials',
      title: 'Liste de témoignages',
      type: 'array',
      of: [
        {
          name: 'testimonial',
          title: 'Témoignage',
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Citation',
              type: 'text',
            },
            {
              name: 'name',
              title: 'Nom',
              type: 'string',
            },
            {
              name: 'job',
              title: 'Fonction/Société/...',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
