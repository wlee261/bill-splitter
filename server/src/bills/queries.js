const getAllBills = 'SELECT * FROM bills';

const getBillById = `SELECT
    bi.item,
    bi.price,
    bi.qty,
    string_agg(s.name, ', ') AS splitters
FROM
    bill_items bi
JOIN
    bill_splitters bs ON bi.bill_item_id = bs.bill_item_id
JOIN
    splitters s ON bs.splitter_id = s.splitter_id
WHERE
    bs.is_splitting = true
    AND bi.bill_id = $1
GROUP BY
    bi.item, bi.price, bi.qty;`;

const getAllSplittersByBillId = 'SELECT name FROM splitters WHERE bill_id = $1';

module.exports = {
  getAllBills,
  getBillById,
  getAllSplittersByBillId,
};
