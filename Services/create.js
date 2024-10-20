const Connection = require('../database/connection');

module.exports = async (username, password) => {
    try {
        const query = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}')`;
        await Connection(query);
        return true;
    } catch (err) {
        console.error('Error creating account:', err);
        return false;
    }
};
