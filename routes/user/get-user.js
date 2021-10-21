const { fetchUsers } = require('../../db/users')

/* GET to get the details about the one User id in the URL */
const getUsers = async (req, res) => {
  let users = await fetchUsers()
  if (users.error) {
    console.error('Error getting users from db')
    res.status(400).json({
      success: false,
      error: 'Error getting users from db',
    })
  } else {
    res.status(200).json({ users, success: true })
  }
  return
}

module.exports = { getUsers }
