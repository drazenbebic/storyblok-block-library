import { ComponentColors, FieldType } from './enums';

export interface Component {
  name: string;
  icon?: string;
  color?: ComponentColors;
  schema: ComponentSchema;
}

export type ComponentSchema = Record<
  string,
  {
    type: FieldType;
    required?: boolean;
    description?: string;
    tooltip?: boolean;
    pos?: number;
    translatable?: boolean;
    default_value?: string | number | boolean;
    display_name?: string;
    maximum?: number;
    minimum?: number;
    options?: ComponentSchemaOptions[];
    source?:
      | 'internal_stories'
      | 'internal'
      | 'external'
      | 'internal_languages';
    restrict_components?: boolean;
    external_datasource?: string;
    component_whitelist?: string[];
    component_blacklist?: string[];
  }
>;

export interface ComponentSchemaOptions {
  name: string;
  value: string | number;
}

export interface Space {
  name: string;
  domain?: string;
  story_published_hook?: string;
}
