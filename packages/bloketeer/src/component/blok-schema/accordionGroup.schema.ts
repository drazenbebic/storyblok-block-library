import { ComponentColors, FieldType } from '../../enums';
import { Component } from '../../types';
import { marginField } from '../../utils';

export const accordionGroupSchema = (): Component => {
  return {
    name: 'accordionGroup',
    icon: 'block-text-img-c',
    color: ComponentColors.CONTENT_DISPLAY,
    schema: {
      allowMultiple: {
        type: FieldType.Boolean,
        default_value: false,
      },
      blocks: {
        type: FieldType.Bloks,
        restrict_components: true,
        component_whitelist: ['accordion'],
      },
      marginTop: marginField,
      marginBottom: marginField,
    },
  };
};
