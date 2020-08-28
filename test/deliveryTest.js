const rankTest = require('ava');
const {deliveryDate} = require("../src/delivery");
const anOrder = {
    'deliveryState':'MAMA',
    'placedOn':
        {
            'plusDays': function (deliveryTime) {
                return deliveryTime;
            },
        },
}

rankTest('deliveryState is MAMA and isRush is true', t => {
    const isRush = true;
    const result = deliveryDate(anOrder, isRush);

    const expectResult = 4;

    t.is(result,expectResult);
});