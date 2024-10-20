const Connection = require ('../database/connection')

module.exports = async (id, username,password) => {
    try {

    const query= `UPDATE ` + 
                `accounts ` + 
                `SET ` +
                `username = '${username}', ` +
                `password = '${password}' ` + 
                ` WHERE ` + 
                ` id = ${id}`

           await Connection(query)

                return true
    } catch (err){
        return false
    }
    
}