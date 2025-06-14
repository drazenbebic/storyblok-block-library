import { ComponentColors, FieldType } from '../../enums';
import { marginField, options } from '../../utils';
import { Component } from '../../types';

export const buttonSchema = ({
  translatable,
}: {
  translatable: boolean;
}): Component => {
  return {
    name: 'button',
    icon: 'block-arrow-pointer',
    color: ComponentColors.CONTENT_DISPLAY,
    schema: {
      content: {
        type: FieldType.Text,
        required: true,
        translatable,
      },
      href: {
        type: FieldType.Text,
        display_name: 'URL',
        required: true,
      },
      size: {
        type: FieldType.Option,
        default_value: 'lg',
        options: options([
          ['Small', 'sm'],
          ['Medium', 'md'],
          ['Large', 'lg'],
        ]),
      },
      target: {
        type: FieldType.Option,
        default_value: '_self',
        options: options([
          ['Self', '_self'],
          ['Blank', '_blank'],
        ]),
      },
      title: {
        type: FieldType.Text,
        translatable,
      },
      variant: {
        type: FieldType.Option,
        required: true,
        default_value: 'primary',
        options: options([
          ['Primary', 'primary'],
          ['Secondary', 'secondary'],
          ['Ghost', 'ghost'],
        ]),
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
