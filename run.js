const csv = require('csv-parser')
const fs = require('fs')

let result = 0;

fs.createReadStream('transactions.csv')
    .pipe(csv())
    .on('data', (data) => {
        if(data.Type === 'Expense' || data.Type === 'Refund' ) {
            result = result + (data.Amount*1);
        }
    })
    .on('end', () => {
        console.log(result);
    })
