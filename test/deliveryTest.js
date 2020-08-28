const rankTest = require('ava');
const {deliveryDate} = require("../src/delivery");

rankTest('deliveryState is MA and isRush is true', t => {
    const anOrder = {
        'deliveryState':'MA',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = true;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 2;

    t.is(result,expectResult);
});

rankTest('deliveryState is NY and isRush is true', t => {
    const anOrder = {
        'deliveryState':'NY',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = true;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 3;

    t.is(result,expectResult);
});