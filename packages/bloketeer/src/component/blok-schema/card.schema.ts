import { FieldType } from '../../enums';

export const cardSchema = () => {
  return {
    name: 'card',
    schema: {
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
      blocks: {
        type: FieldType.Bloks,
      },
    },
  };
};
