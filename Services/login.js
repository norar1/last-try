const Connection = require('../database/connection');

const loginService = async (username, password) => {
    const query = `SELECT id FROM accounts WHERE username = ? AND password = ?`;
    const results = await Connection(query, [username, password]);

    if (results.length > 0) {
        // Return user ID along with success status
        return { success: true, userId: results[0].id };
    }
    return { success: false };
};

module.exports = loginService;
