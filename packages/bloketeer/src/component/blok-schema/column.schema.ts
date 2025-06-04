import { ComponentColors, FieldType } from '../../enums';
import { options } from '../../utils';
import { Component } from '../../types';

export const columnSchema = (): Component => {
  return {
    name: 'column',
    icon: 'block-table',
    color: ComponentColors.STRUCTURING,
    schema: {
      span: {
        type: FieldType.Option,
        default_value: 12,
        required: true,
        options: options([
          ['1/12', 1],
          ['2/12', 2],
          ['3/12', 3],
          ['4/12', 4],
          ['5/12', 5],
          ['6/12', 6],
          ['7/12', 7],
          ['8/12', 8],
          ['9/12', 9],
          ['10/12', 10],
          ['11/12', 11],
          ['12/12', 12],
        ]),
      },
      contentPadding: {
        type: FieldType.Boolean,
        default_value: false,
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
      blocks: {
        type: FieldType.Bloks,
        restrict_components: true,
        component_whitelist: ['column'],
      },
    },
  };
};
