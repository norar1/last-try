const db = require('../database/connection');

const logPurchase = async (userId, itemId, quantity) => {
    try {
     
        const itemQuery = 'SELECT Price FROM items WHERE ID = ?';
        const items = await db(itemQuery, [itemId]);

        console.log('Items retrieved:', items); 

        if (!items || items.length === 0) {
            return { success: false, message: 'Item not found' };
        }

        const price = items[0].Price; 
        const totalCost = price * quantity;


        const insertQuery = `
            INSERT INTO purchase_logs (userId, itemId, quantity, totalCost, purchaseDate)
            VALUES (?, ?, ?, ?, NOW())
        `;
        await db(insertQuery, [userId, itemId, quantity, totalCost]);

        return { success: true, message: 'Purchase logged successfully' };
    } catch (error) {
        console.error('Error logging purchase:', error);
        return { success: false, message: 'Failed to log purchase' };
    }
};

module.exports = logPurchase;
