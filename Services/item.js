const Connection = require('../database/connection');

const purchaseItem = async (userId, itemId, quantity) => {
    try {
        const itemQuery = `SELECT Price, Quantity FROM items WHERE ID = ?`;
        const itemResult = await Connection(itemQuery, [itemId]);
        if (itemResult.length === 0) throw new Error('Item not found.');

        const { Price, Quantity } = itemResult[0];
        const totalCost = Price * quantity;

        const creditQuery = `SELECT credit FROM accounts WHERE id = ?`;
        const creditResult = await Connection(creditQuery, [userId]);
        if (creditResult.length === 0) throw new Error('User not found.');

        const userCredit = creditResult[0].credit;

        if (userCredit < totalCost) throw new Error('Insufficient credit.');
        if (Quantity < quantity) throw new Error('Not enough stock available.');

        await Connection(`UPDATE items SET Quantity = Quantity - ? WHERE ID = ?`, [quantity, itemId]);
        await Connection(`UPDATE accounts SET credit = credit - ? WHERE id = ?`, [totalCost, userId]);

        return { success: true, message: 'Purchase successful.' };

    } catch (err) {
        return { success: false, message: err.message };
    }
};

module.exports = purchaseItem;
