export const imageSchema = ({ translatable }: { translatable: boolean }) => {
  return {
    name: 'image',
    schema: {
      asset: {
        type: 'asset',
      },
      alt: {
        type: 'text',
        required: true,
        translatable,
      },
      caption: {
        type: 'text',
        translatable,
      },
      loading: {
        type: 'option',
        default_value: 'lazy',
        options: [
          {
            name: 'Lazy',
            value: 'lazy',
          },
          {
            name: 'Eager',
            value: 'eager',
          },
        ],
      },
    },
  };
};
