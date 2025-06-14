import { FieldType } from './enums';
import { ComponentSchemaField } from './types';

export const option = (name: string, value: string | number) => ({
  name,
  value,
});

export const options = (options: [name: string, value: string | number][]) =>
  options.map(([name, value]) => ({
    name,
    value,
  }));

export const marginField: ComponentSchemaField = {
  type: FieldType.Option,
  source: 'external',
  external_datasource:
    'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/spacing.json',
};
