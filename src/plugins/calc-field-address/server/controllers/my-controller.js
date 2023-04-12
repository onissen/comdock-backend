'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('calc-field-address')
      .service('myService')
      .getWelcomeMessage();
  },
});
