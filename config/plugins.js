module.exports = {
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
    },
    upload: {
      config: {
        provider: 'local',
        sizeLimit: 200000,
      },
    }
};