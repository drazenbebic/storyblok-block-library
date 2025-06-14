import { ComponentColors, FieldType } from '../../enums';
import { marginField, options } from '../../utils';
import { Component } from '../../types';

export const columnsSchema = (): Component => {
  return {
    name: 'columns',
    icon: 'block-table-2',
    color: ComponentColors.STRUCTURING,
    schema: {
      align: {
        type: FieldType.Option,
        default_value: 'center',
        options: options([
          ['Start', 'start'],
          ['End', 'end'],
          ['Center', 'center'],
          ['Stretch', 'stretch'],
        ]),
      },
      fullWidth: {
        type: FieldType.Boolean,
        default_value: false,
      },
      noPadding: {
        type: FieldType.Boolean,
        default_value: false,
      },
      striped: {
        type: FieldType.Boolean,
        default_value: false,
      },
      blocks: {
        type: FieldType.Bloks,
        restrict_components: true,
        component_whitelist: ['column'],
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
