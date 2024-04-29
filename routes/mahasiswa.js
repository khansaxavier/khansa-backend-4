const express = require('express');
const routeMhs = express.Router();
const connection = require('../db/db')
const ctrMhsm = require('../controler/mahasiswa')

routeMhs.post('/belajar', ctrMhsm.create)

routeMhs.get('/belajar', ctrMhsm.getMhs)

routeMhs.get('/belajar/:nim', ctrMhsm.getMhsBynim)

routeMhs.put('/belajar/:nim', ctrMhsm.update)

routeMhs.delete('/belajar/:nim', ctrMhsm.delete)

module.exports = routeMhs