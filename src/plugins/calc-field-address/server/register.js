'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'calcAddress',
    plugin: 'calc-field-address',
    type: 'string',
  });
};
