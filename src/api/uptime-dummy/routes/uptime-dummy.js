'use strict';

/**
 * uptime-dummy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::uptime-dummy.uptime-dummy');
