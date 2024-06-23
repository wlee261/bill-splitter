const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getBills);

router.get('/:id', controller.getBillById);

module.exports = router;
