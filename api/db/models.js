const mongoose = require('mongoose');
const { createModels } = require('data-schemas');
const models = createModels(mongoose);

module.exports = { ...models };
