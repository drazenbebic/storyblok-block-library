import { ComponentColors, FieldType } from '../../enums';
import { Component } from '../../types';

export const cardSchema = (): Component => {
  return {
    name: 'card',
    icon: 'block-table',
    color: ComponentColors.CONTENT_DISPLAY,
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
