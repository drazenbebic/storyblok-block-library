import { ComponentColors, FieldType } from '../../enums';
import {
  spacingField,
  options,
  textAlignOptions,
  textColorOptions,
  textSizeOptions,
  textVariantOptions,
} from '../../utils';
import { Component } from '../../types';

export const headingSchema = ({
  translatable,
}: {
  translatable: boolean;
}): Component => {
  return {
    name: 'heading',
    icon: 'block-text-img-t-l',
    color: ComponentColors.CONTENT_DISPLAY,
    schema: {
      align: {
        type: FieldType.Options,
        default_value: 'left',
        options: textAlignOptions,
      },
      content: {
        type: FieldType.Text,
        required: true,
        translatable,
      },
      level: {
        type: FieldType.Options,
        default_value: 'h2',
        options: options([
          ['H1', 'h1'],
          ['H2', 'h2'],
          ['H3', 'h3'],
          ['H4', 'h4'],
          ['H5', 'h5'],
          ['H6', 'h6'],
        ]),
      },
      color: {
        type: FieldType.Options,
        default_value: 'accent',
        options: textColorOptions,
      },
      size: {
        type: FieldType.Options,
        default_value: 'lg',
        options: textSizeOptions,
      },
      variant: {
        type: FieldType.Options,
        default_value: 'heading',
        options: textVariantOptions,
      },
      marginTop: spacingField,
      marginBottom: spacingField,
    },
  };
};
