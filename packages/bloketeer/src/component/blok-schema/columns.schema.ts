export const columnsSchema = () => {
  return {
    name: 'columns',
    schema: {
      align: {
        type: 'option',
        default_value: 'center',
        options: [
          {
            name: 'Start',
            value: 'start',
          },
          {
            name: 'End',
            value: 'end',
          },
          {
            name: 'Center',
            value: 'center',
          },
          {
            name: 'Stretch',
            value: 'stretch',
          },
        ],
      },
      fullWidth: {
        type: 'boolean',
        default_value: false,
      },
      noPadding: {
        type: 'boolean',
        default_value: false,
      },
      striped: {
        type: 'boolean',
        default_value: false,
      },
      blocks: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['column'],
      },
    },
  };
};
