const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAccounts); // To get all accounts
router.post('/post', controller.addAccount); // Add a new account
router.put('/update/:id', controller.updateAccount); // Update an existing account

module.exports = router;