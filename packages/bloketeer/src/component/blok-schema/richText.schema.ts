import { options } from '../../utils';
import { FieldType } from '../../enums';

export const richTextSchema = ({ translatable }: { translatable: boolean }) => {
  return {
    name: 'richText',
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
      marginTop: {
        type: FieldType.Option,
        source: 'external',
        external_datasource:
          'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/margin.json',
      },
      marginBottom: {
        type: FieldType.Option,
        source: 'external',
        external_datasource:
          'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/margin.json',
      },
    },
  };
};
