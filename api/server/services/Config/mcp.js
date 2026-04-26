const { createMCPToolCacheService } = require('api');
const { getCachedTools, setCachedTools } = require('./getCachedTools');

const { mergeAppTools, cacheMCPServerTools, updateMCPServerTools } = createMCPToolCacheService({
  getCachedTools,
  setCachedTools,
});

module.exports = {
  mergeAppTools,
  cacheMCPServerTools,
  updateMCPServerTools,
};
