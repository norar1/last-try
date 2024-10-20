const Connection = require ('../database/connection')

module.exports = async (id) => {
    try {
        const query = `DELETE FROM `  +
                       `accounts ` +
                       `WHERE ` +
                       `id = ${id}`
                       await Connection(query)
                       return true
    } catch (err) {
        return false
    }
}