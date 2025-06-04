export const columnSchema = () => {
  return {
    name: 'column',
    schema: {
      span: {
        type: 'option',
        default_value: 12,
        required: true,
        options: [
          {
            name: '1/12',
            value: 1,
          },
          {
            name: '2/12',
            value: 2,
          },
          {
            name: '3/12',
            value: 3,
          },
          {
            name: '4/12',
            value: 4,
          },
          {
            name: '5/12',
            value: 5,
          },
          {
            name: '6/12',
            value: 6,
          },
          {
            name: '7/12',
            value: 7,
          },
          {
            name: '8/12',
            value: 8,
          },
          {
            name: '9/12',
            value: 9,
          },
          {
            name: '10/12',
            value: 10,
          },
          {
            name: '11/12',
            value: 11,
          },
          {
            name: '12/12',
            value: 12,
          },
        ],
      },
      contentPadding: {
        type: 'boolean',
        default_value: false,
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
      blocks: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['column'],
      },
    },
  };
};
