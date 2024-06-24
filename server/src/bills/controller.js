const pool = require('../../db');

queries = require('./queries');

const getBills = (req, res) => {
  pool.query(queries.getAllBills, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getBillById = async (req, res) => {
  const billId = parseInt(req.params.id);

  try {
    const billQuery = await pool.query(queries.getBillById, [billId]);
    const splittersQuery = await pool.query(queries.getAllSplittersByBillId, [
      billId,
    ]);

    const billInformation = billQuery.rows;
    const splitters = splittersQuery.rows;

    const billAndSplittersInformation = { billInformation, splitters };

    res.render('./bill/index', billAndSplittersInformation);
  } catch (error) {
    console.error('Error fetching bill details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// edit, add, delete splitter
// edit, add, delete bill item
// edit, add, delete bill
// edit, add delete split relationship

module.exports = {
  getBills,
  getBillById,
};
