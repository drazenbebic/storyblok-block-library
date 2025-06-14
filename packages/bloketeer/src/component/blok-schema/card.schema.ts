import { ComponentColors, FieldType } from '../../enums';
import { Component } from '../../types';
import { marginField } from '../../utils';

export const cardSchema = (): Component => {
  return {
    name: 'card',
    icon: 'block-table',
    color: ComponentColors.CONTENT_DISPLAY,
    schema: {
      blocks: {
        type: FieldType.Bloks,
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
