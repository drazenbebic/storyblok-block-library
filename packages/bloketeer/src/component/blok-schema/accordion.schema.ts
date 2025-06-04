export const accordionSchema = ({
  translatable,
}: {
  translatable: boolean;
}) => {
  return {
    name: 'accordion',
    schema: {
      title: {
        type: 'text',
        required: true,
        translatable,
      },
      open: {
        type: 'boolean',
        default_value: false,
      },
      blocks: {
        type: 'bloks',
      },
    },
  };
};
