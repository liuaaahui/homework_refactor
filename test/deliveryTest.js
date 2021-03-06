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

rankTest('deliveryState is CA and isRush is true', t => {
    const anOrder = {
        'deliveryState':'CA',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = true;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 4;

    t.is(result,expectResult);
});

rankTest('deliveryState is MA and isRush is false', t => {
    const anOrder = {
        'deliveryState':'MA',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = false;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 4;

    t.is(result,expectResult);
});

rankTest('deliveryState is ME and isRush is false', t => {
    const anOrder = {
        'deliveryState':'ME',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = false;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 5;

    t.is(result,expectResult);
});

rankTest('deliveryState is MC and isRush is false', t => {
    const anOrder = {
        'deliveryState':'MC',
        'placedOn':
            {
                'plusDays': function (deliveryTime) {
                    return deliveryTime;
                },
            },
    }

    const isRush = false;

    const result = deliveryDate(anOrder, isRush);

    const expectResult = 6;

    t.is(result,expectResult);
});