const express = require('express');
const ctrl = require('../../controllers/users');
const {validateBody} = require('../../middlewares'); 
const schemas = require('../../schemas/users')

const router = express.Router();

router.get('/', ctrl.listUsers); 

router.get('/:userId', ctrl.getUserById); 

router.post('/', validateBody(schemas.addSchema), ctrl.addUser); 

router.put('/:userId', validateBody(schemas.updateSchema),ctrl.updateUser);

    router.delete('/:userId', ctrl.deleteUser);  

module.exports = router; 