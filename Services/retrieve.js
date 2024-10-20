const Connection = require ('../database/connection')

module.exports = async (fields) => {
    try {

    const query= `SELECT ` +
                   `${fields } ` +
                `FROM ` +
                  `accounts `

          const results = await Connection(query)

                return results
    } catch (err){
        console.log("Not Connected!")
    }
    
}