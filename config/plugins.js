module.exports = {
    'calc-field-address': {
      enabled: true,
      resolve: './src/plugins/calc-field-address' // path to plugin folder
    },
    slugify: {
      enabled:true,
      config: {
        contentTypes: {
          company: {
            field: 'pageslug',
            references: 'hr_number'
          }
        }
      }
    }
};