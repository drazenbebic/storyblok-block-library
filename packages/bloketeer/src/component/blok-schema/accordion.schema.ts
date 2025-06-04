import { ComponentColors, FieldType } from '../../enums';
import { Component } from '../../types';

export const accordionSchema = ({
  translatable,
}: {
  translatable: boolean;
}): Component => {
  return {
    name: 'accordion',
    icon: 'block-text-img-c',
    color: ComponentColors.CONTENT_DISPLAY,
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
