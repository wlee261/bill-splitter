const express = require('express');
const billRoutes = require('./src/bills/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/v1/bills', billRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

// SELECT
//     bi.item,
//     bi.price,
//     bi.qty,
//     string_agg(s.name, ', ') AS splitters
// FROM
//     bill_items bi
// JOIN
//     bill_splitters bs ON bi.bill_item_id = bs.bill_item_id
// JOIN
//     splitters s ON bs.splitter_id = s.splitter_id
// WHERE
//     bs.is_splitting = true
//     AND bi.bill_id = 1
// GROUP BY
//     bi.item, bi.price, bi.qty;
