let { NODE_ENV } = process.env
module.exports = NODE_ENV === 'development' ? (
  require('./build/development')
) : (
  require('./build/production')
)