const express = require('express');
const router = express.Router();
const create = require('./Create');
const read = require('./Read');
const update = require('./Update');
const deleteBeers = require('./Delete');

/* CREATE User */
router.get('/', (req, res) => {res.send("Forbidden")});
router.put('/create', create);
router.get('/read', read);
router.patch('/update', update);
router.delete('/delete', deleteBeers);

module.exports = router;
