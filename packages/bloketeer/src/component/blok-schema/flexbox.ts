import { Component } from '../../types';
import { ComponentColors, FieldType } from '../../enums';
import { marginField, options } from '../../utils';

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
    gap: {
      type: FieldType.Option,
      source: 'external',
      external_datasource:
        'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/margin.json',
    },
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
    marginTop: marginField,
    marginBottom: marginField,
  },
});
