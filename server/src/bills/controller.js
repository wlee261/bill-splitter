const pool = require('../../db');

queries = require('./queries');

const getBills = (req, res) => {
  pool.query(queries.getAllBills, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getBillById = (req, res) => {
  const billId = parseInt(req.params.id);
  pool.query(queries.getBillById, [billId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getBills,
  getBillById,
};
