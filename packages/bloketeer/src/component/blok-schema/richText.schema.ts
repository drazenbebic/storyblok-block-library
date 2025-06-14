import { options, marginField } from '../../utils';
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
        options: options([
          ['Left', 'left'],
          ['Center', 'center'],
          ['Right', 'right'],
        ]),
      },
      content: {
        type: FieldType.Richtext,
        required: true,
        translatable,
      },
      color: {
        type: FieldType.Option,
        default_value: 'default',
        options: options([
          ['Default', 'default'],
          ['Accent', 'accent'],
          ['Dark', 'dark'],
          ['Light', 'light'],
          ['Lighter', 'lighter'],
          ['White', 'white'],
        ]),
      },
      size: {
        type: FieldType.Option,
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
        type: FieldType.Option,
        default_value: 'copy',
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
