export const cardSchema = () => {
  return {
    name: 'card',
    schema: {
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
      },
    },
  };
};
