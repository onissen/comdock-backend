'use strict';

/**
 * uptime-dummy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uptime-dummy.uptime-dummy');
