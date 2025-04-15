const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.post('/post', controller.addLocations);
router.get ('/:id', controller.getLocationsById);
router.get('/', controller.getLocations)
router.put('/update/:id', controller.updateLocations);

module.exports = router;
