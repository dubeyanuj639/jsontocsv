const routes = require('express').Router()
const { getCsvFile } = require('./controller');

routes.get('/', getCsvFile)
module.exports = routes;
