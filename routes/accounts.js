const express = require('express');
const router = express.Router();

const CreateService = require('../Services/create');
const RetriveService = require('../Services/retrieve');
const UpdateService = require('../Services/update');
const DeleteService = require('../Services/delete');
const loginService = require('../Services/login');
const purchaseItem = require('../Services/item');
const logPurchase = require('../Services/purchaselogs');

router.post('/item', async (req, res) => {
    const { userId, itemId, quantity } = req.body;

    if (!userId || !itemId || !quantity || isNaN(quantity) || quantity <= 0) {
        return res.status(400).send({
            success: false,
            message: "Invalid userId, itemId, or quantity."
        });
    }

    const purchaseResult = await purchaseItem(userId, itemId, quantity);

    return res.status(purchaseResult.success ? 200 : 400).send({
        success: purchaseResult.success,
        message: purchaseResult.message
    });
});

router.post('/create', async (req, res) => {
    const { username, password } = req.body;
    const results = await CreateService(username, password);
    if (results) {
        res.status(200).send({
            status: results,
            message: "Successfully Created"
        });
    } else {
        res.status(500).send({
            status: results,
            message: "Not Created"
        });
    }
});

router.get('/retrieve', async (req, res) => {
    const { fields } = req.query;
    const results = await RetriveService(fields);
    if (results) {
        res.status(200).send(results);
    } else {
        res.status(500).send({
            status: results,
            message: "Not Retrieved!"
        });
    }
});

router.post('/update', async (req, res) => {
    const { id, newUsername, newPassword } = req.body;
    const results = await UpdateService(id, newUsername, newPassword);
    if (results) {
        res.status(200).send({
            status: results,
            message: "Successfully updated!"
        });
    } else {
        res.status(500).send({
            status: results,
            message: "Not updated!"
        });
    }
});

router.get('/delete', async (req, res) => {
    const { id } = req.query;
    const results = await DeleteService(id);
    if (results) {
        res.status(200).send({
            status: results,
            message: "Successfully Deleted!"
        });
    } else {
        res.status(500).send({
            status: results,
            message: "Not Deleted!"
        });
    }
});

router.post('/purchaselogs', async (req, res) => {
    const { userId, itemId, quantity } = req.body;
    const purchaseResult = await logPurchase(userId, itemId, quantity);
    return res.status(purchaseResult.success ? 200 : 400).send({
        success: purchaseResult.success,
        message: purchaseResult.message
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const results = await loginService(username, password);
    if (results.success) {
        res.status(200).send({
            success: true,
            userId: results.userId,
            message: "Successfully Logged in"
        });
    } else {
        res.status(401).send({
            success: false,
            message: "Incorrect user or password"
        });
    }
});

module.exports = router;
