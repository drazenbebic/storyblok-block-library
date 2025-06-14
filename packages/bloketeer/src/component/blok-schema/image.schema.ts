import { ComponentColors, FieldType } from '../../enums';
import { marginField, options } from '../../utils';
import { Component } from '../../types';

export const imageSchema = ({
  translatable,
}: {
  translatable: boolean;
}): Component => {
  return {
    name: 'image',
    icon: 'block-image',
    color: ComponentColors.CONTENT_DISPLAY,
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
        type: FieldType.Option,
        default_value: 'lazy',
        options: options([
          ['Lazy', 'lazy'],
          ['Eager', 'eager'],
        ]),
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
