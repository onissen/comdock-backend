'use strict';

/**
 * uptime-dummy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::uptime-dummy.uptime-dummy');
