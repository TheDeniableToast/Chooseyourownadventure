const express = require('express');
const router = express.Router();
const {pool} = require('../models/db');

router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  const sql = 'SELECT * FROM story WHERE id = ?';

  pool.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      id: req.params.id,
      result: result
    });
  });
});

module.exports = router;