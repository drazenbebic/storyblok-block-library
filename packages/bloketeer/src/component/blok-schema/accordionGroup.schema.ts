export const accordionGroupSchema = () => {
  return {
    name: 'accordionGroup',
    schema: {
      allowMultiple: {
        type: 'boolean',
        default_value: false,
      },
      blocks: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['accordion'],
      },
    },
  };
};
