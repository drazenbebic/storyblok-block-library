export const buttonSchema = ({ translatable }: { translatable: boolean }) => {
  return {
    name: 'button',
    schema: {
      content: {
        required: true,
        type: 'text',
        translatable,
      },
      href: {
        required: true,
        type: 'text',
      },
      size: {
        type: 'option',
        default_value: 'lg',
        options: [
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
        ],
      },
      target: {
        type: 'option',
        default_value: '_self',
        options: [
          {
            name: 'Self',
            value: '_self',
          },
          {
            name: 'Blank',
            value: '_blank',
          },
        ],
      },
      title: {
        type: 'text',
        translatable,
      },
      variant: {
        type: 'option',
        required: true,
        default_value: 'primary',
        options: [
          {
            name: 'Primary',
            value: 'primary',
          },
          {
            name: 'Secondary',
            value: 'secondary',
          },
          {
            name: 'Ghost',
            value: 'ghost',
          },
        ],
      },
    },
  };
};
