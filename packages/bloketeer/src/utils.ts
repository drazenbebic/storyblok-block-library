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

export const textAlignOptions = options([
  ['Left', 'left'],
  ['Center', 'center'],
  ['Right', 'right'],
]);

export const textColorOptions = options([
  ['Default', 'default'],
  ['Accent', 'accent'],
  ['Light', 'light'],
  ['Dark', 'dark'],
  ['Lighter', 'lighter'],
  ['White', 'white'],
]);

export const textVariantOptions = options([
  ['Copy', 'copy'],
  ['Heading', 'heading'],
]);

export const textSizeOptions = options([
  ['2x Extra Small', '2xs'],
  ['Extra Small', 'xs'],
  ['Small', 'sm'],
  ['Medium', 'md'],
  ['Large', 'lg'],
  ['Extra Large', 'xl'],
  ['2x Extra Large', '2xl'],
  ['3x Extra Large', '3xl'],
  ['4x Extra Large', '4xl'],
  ['5x Extra Large', '5xl'],
  ['6x Extra Large', '6xl'],
  ['7x Extra Large', '7xl'],
]);

export const spacingField: ComponentSchemaField = {
  type: FieldType.Option,
  source: 'external',
  external_datasource:
    'https://raw.githubusercontent.com/drazenbebic/storyblok-block-library/refs/heads/main/tailwind/spacing.json',
};
