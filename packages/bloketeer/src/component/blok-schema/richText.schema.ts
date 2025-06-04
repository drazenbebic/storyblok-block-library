export const richTextSchema = ({ translatable }: { translatable: boolean }) => {
  return {
    name: 'richText',
    schema: {
      align: {
        type: 'option',
        default_value: 'left',
        options: [
          {
            name: 'Left',
            value: 'left',
          },
          {
            name: 'Center',
            value: 'center',
          },
          {
            name: 'Right',
            value: 'right',
          },
        ],
      },
      content: {
        type: 'richtext',
        required: true,
        translatable,
      },
      color: {
        type: 'option',
        default_value: 'default',
        options: [
          {
            name: 'Default',
            value: 'default',
          },
          {
            name: 'Accent',
            value: 'accent',
          },
          {
            name: 'Light',
            value: 'light',
          },
          {
            name: 'Lighter',
            value: 'lighter',
          },
          {
            name: 'White',
            value: 'white',
          },
        ],
      },
      size: {
        type: 'option',
        default_value: 'lg',
        options: [
          {
            name: '2x Extra Small',
            value: '2xs',
          },
          {
            name: 'Extra Small',
            value: 'xs',
          },
          {
            name: 'Small',
            value: 'sm',
          },
          {
            name: 'Medium',
            value: 'md',
          },
          {
            name: 'Large',
            value: 'lg',
          },
          {
            name: 'Extra Large',
            value: 'xl',
          },
          {
            name: '2x Extra Large',
            value: '2xl',
          },
          {
            name: '3x Extra Large',
            value: '3xl',
          },
          {
            name: '4x Extra Large',
            value: '4xl',
          },
          {
            name: '5x Extra Large',
            value: '5xl',
          },
          {
            name: '6x Extra Large',
            value: '6xl',
          },
          {
            name: '7x Extra Large',
            value: '7xl',
          },
        ],
      },
      variant: {
        type: 'option',
        default_value: 'copy',
        options: [
          {
            name: 'Copy',
            value: 'copy',
          },
          {
            name: 'Heading',
            value: 'heading',
          },
        ],
      },
      marginTop: {
        type: 'option',
        source: 'external',
        external_datasource:
          'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/margin.json',
      },
      marginBottom: {
        type: 'option',
        source: 'external',
        external_datasource:
          'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/margin.json',
      },
    },
  };
};
