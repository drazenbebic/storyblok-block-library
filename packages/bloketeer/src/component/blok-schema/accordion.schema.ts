import { FieldType } from '../../enums';

export const accordionSchema = ({
  translatable,
}: {
  translatable: boolean;
}) => {
  return {
    name: 'accordion',
    schema: {
      title: {
        type: FieldType.Text,
        required: true,
        translatable,
      },
      open: {
        type: FieldType.Boolean,
        default_value: false,
      },
      blocks: {
        type: FieldType.Bloks,
      },
    },
  };
};
