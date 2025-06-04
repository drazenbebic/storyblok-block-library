import { FieldType } from '../../enums';

export const accordionGroupSchema = () => {
  return {
    name: 'accordionGroup',
    schema: {
      allowMultiple: {
        type: FieldType.Boolean,
        default_value: false,
      },
      blocks: {
        type: FieldType.Bloks,
        restrict_components: true,
        component_whitelist: ['accordion'],
      },
    },
  };
};
