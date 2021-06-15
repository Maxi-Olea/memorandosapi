const { sequelizeConnection } = require('../config/server/sequelizeConfig')
const mustache = require('mustache')


const executeRawQuery = (baseQuery, queryParams) => {
//   logger.info(`executeRawQuery - baseQuery[${baseQuery}] - queryParams[${queryParams}]`)
  const sql = buildQuery(baseQuery.rawQuery, queryParams)
  return sequelizeConnection.query(sql, { type: baseQuery.type })
}

const buildQuery = (rawQuery, params) => {
//   logger.info(`buildQuery - rawQuery.length[${rawQuery.length}] - params[${JSON.stringify(params)}]`)
  return mustache.render(rawQuery, params)
}

module.exports = { executeRawQuery }