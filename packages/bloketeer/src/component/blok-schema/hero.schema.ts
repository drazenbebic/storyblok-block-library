import { Component } from '../../types';
import { ComponentColors, FieldType } from '../../enums';
import { spacingField } from '../../utils';

export const heroSchema = (): Component => ({
  name: 'hero',
  icon: 'block-arrow-pointer',
  color: ComponentColors.CONTENT_DISPLAY,
  schema: {
    heading: {
      type: FieldType.Bloks,
      required: true,
      minimum: 1,
      maximum: 1,
      restrict_components: true,
      component_whitelist: ['heading'],
    },
    content: {
      type: FieldType.Bloks,
      required: true,
      minimum: 1,
      maximum: 1,
      restrict_components: true,
      component_whitelist: ['richText'],
    },
    buttons: {
      type: FieldType.Bloks,
      required: true,
      minimum: 1,
      maximum: 2,
      restrict_components: true,
      component_whitelist: ['button'],
    },
    marginTop: spacingField,
    marginBottom: spacingField,
  },
});
