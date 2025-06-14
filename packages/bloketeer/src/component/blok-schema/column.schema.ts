import { ComponentColors, FieldType } from '../../enums';
import { spacingField, options } from '../../utils';
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
      blocks: {
        type: FieldType.Bloks,
        restrict_components: true,
        component_whitelist: ['column'],
      },
      marginTop: spacingField,
      marginBottom: spacingField,
    },
  };
};
