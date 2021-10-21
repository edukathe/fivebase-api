const pool = require('./dbConnection')

const  fetchUsers = async () => {
  try {
    const sql = 'SELECT * FROM users'
    const res = await pool.query(sql)
    return res.rows || []
  } catch (error) {
    console.info('ERROR', error)
    return {error}
  }
}

module.exports = { fetchUsers }