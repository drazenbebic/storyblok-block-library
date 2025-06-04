import { FieldType } from '../../enums';
import { options } from '../../utils';

export const imageSchema = ({ translatable }: { translatable: boolean }) => {
  return {
    name: 'image',
    schema: {
      asset: {
        type: FieldType.Asset,
      },
      alt: {
        type: FieldType.Text,
        required: true,
        translatable,
      },
      caption: {
        type: FieldType.Text,
        translatable,
      },
      loading: {
        type: 'option',
        default_value: 'lazy',
        options: options([
          ['Lazy', 'lazy'],
          ['Eager', 'eager'],
        ]),
      },
    },
  };
};
