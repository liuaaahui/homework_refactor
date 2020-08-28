const rankTest = require('ava');
const {printOwing} = require("../src/print");

rankTest('Sample test1', t => {
    const invoice = {
        'customer': 'penny',
        'borderSpacing': [
            {
                'amount': 10,
            },
        ],
    }

    const result = printOwing(invoice);

    const expectResult = '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: penny\n' +
        'amount: 10\n' +
        'amount: 9/27/2020\n';

    t.is(result,expectResult);
});