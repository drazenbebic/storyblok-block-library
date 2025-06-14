import { ComponentColors, FieldType } from '../../enums';
import { marginField, options } from '../../utils';
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
        options: options([
          ['Left', 'left'],
          ['Center', 'center'],
          ['Right', 'right'],
        ]),
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
        options: options([
          ['Default', 'default'],
          ['Accent', 'accent'],
          ['Light', 'light'],
          ['Dark', 'dark'],
          ['Lighter', 'lighter'],
          ['White', 'white'],
        ]),
      },
      size: {
        type: FieldType.Options,
        default_value: 'lg',
        options: options([
          ['2x Extra Small', '2xs'],
          ['Extra Small', 'xs'],
          ['Small', 'sm'],
          ['Medium', 'md'],
          ['Large', 'lg'],
          ['Extra Large', 'xl'],
          ['2x Extra Large', '2xl'],
          ['3x Extra Large', '3xl'],
          ['4x Extra Large', '4xl'],
          ['5x Extra Large', '5xl'],
          ['6x Extra Large', '6xl'],
          ['7x Extra Large', '7xl'],
        ]),
      },
      variant: {
        type: FieldType.Options,
        default_value: 'heading',
        options: options([
          ['Copy', 'copy'],
          ['Heading', 'heading'],
        ]),
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
