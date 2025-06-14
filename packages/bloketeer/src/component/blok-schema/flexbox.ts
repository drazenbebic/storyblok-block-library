import { Component } from '../../types';
import { ComponentColors, FieldType } from '../../enums';
import { spacingField, options } from '../../utils';

export const flexboxSchema = (): Component => ({
  name: 'flexbox',
  icon: 'block-text-img-r-l',
  color: ComponentColors.STRUCTURING,
  schema: {
    align: {
      type: FieldType.Option,
      options: options([
        ['Start', 'start'],
        ['End', 'end'],
        ['Center', 'center'],
        ['Stretch', 'stretch'],
      ]),
    },
    direction: {
      type: FieldType.Option,
      options: options([
        ['Row', 'row'],
        ['Row (Reverse)', 'row-reverse'],
        ['Column', 'col'],
        ['Column (Reverse)', 'col-reverse'],
      ]),
    },
    gap: spacingField,
    inline: {
      type: FieldType.Boolean,
      default_value: false,
    },
    justify: {
      type: FieldType.Option,
      options: options([
        ['Start', 'start'],
        ['End', 'end'],
        ['Center', 'center'],
        ['Between', 'between'],
        ['Around', 'around'],
        ['Evenly', 'evenly'],
        ['Stretch', 'stretch'],
      ]),
    },
    wrap: {
      type: FieldType.Option,
      options: options([
        ['No Wrap', 'nowrap'],
        ['Wrap', 'wrap'],
        ['Wrap (Reverse)', 'wrap-reverse'],
      ]),
    },
    bloks: {
      type: FieldType.Bloks,
    },
    marginTop: spacingField,
    marginBottom: spacingField,
  },
});
