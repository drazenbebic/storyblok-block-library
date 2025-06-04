/**
 * Available Storyblok component field types.
 *
 * @see https://www.storyblok.com/docs/api/management/components/possible-field-types
 */
export enum FieldType {
  /** Blocks: a field to interleave other components in your current one */
  Bloks = 'bloks',

  /** Text: a text field */
  Text = 'text',

  /** Textarea: a text area */
  Textarea = 'textarea',

  /** Richtext: a richtext field */
  Richtext = 'richtext',

  /** Markdown: write markdown with a text area and additional formatting options */
  Markdown = 'markdown',

  /** Number: a number field */
  Number = 'number',

  /** Date/Time: a date and time picker */
  Datetime = 'datetime',

  /** Boolean: a checkbox - true/false */
  Boolean = 'boolean',

  /** Single-Option: a single dropdown */
  Option = 'option',

  /** Multi-Options: a list of checkboxes that allows multi-select */
  Options = 'options',

  /** Asset: Single asset (images, videos, audio, and documents) */
  Asset = 'asset',

  /** Multi-Assets: (images, videos, audio, and documents) */
  Multiasset = 'multiasset',

  /** Link: an input field for adding links like internal linking to other stories, emails etc. */
  Multilink = 'multilink',

  /** Table: a field for table format */
  Table = 'table',

  /** Group: no input possibility - allows you to group fields in sections */
  Section = 'section',

  /** Plugin: Extend the editor yourself with a color picker or similar */
  Custom = 'custom',

  /** Image (old): a upload field for a single image with cropping possibilities */
  Image = 'image',

  /** File (old): a upload field for a single file */
  File = 'file',
}

export enum ComponentColors {
  CONTENT_DISPLAY = '#2db47d',
  STRUCTURING = '#374dc3',
}
