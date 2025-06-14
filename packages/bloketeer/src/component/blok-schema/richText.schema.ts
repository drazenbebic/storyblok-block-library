import {
  spacingField,
  textColorOptions,
  textVariantOptions,
  textSizeOptions,
  textAlignOptions,
} from '../../utils';
import { ComponentColors, FieldType } from '../../enums';
import { Component } from '../../types';

export const richTextSchema = ({
  translatable,
}: {
  translatable: boolean;
}): Component => {
  return {
    name: 'richText',
    icon: 'block-text-l',
    color: ComponentColors.CONTENT_DISPLAY,
    schema: {
      align: {
        type: FieldType.Option,
        default_value: 'left',
        options: textAlignOptions,
      },
      content: {
        type: FieldType.Richtext,
        required: true,
        translatable,
      },
      color: {
        type: FieldType.Option,
        default_value: 'default',
        options: textColorOptions,
      },
      size: {
        type: FieldType.Option,
        default_value: 'lg',
        options: textSizeOptions,
      },
      variant: {
        type: FieldType.Option,
        default_value: 'copy',
        options: textVariantOptions,
      },
      marginTop: spacingField,
      marginBottom: spacingField,
    },
  };
};
