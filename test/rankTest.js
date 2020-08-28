const rankTest = require('ava');
const {rating} = require("../src/rank");
const {voyageProfitFactor} = require("../src/rank");
const {captainHistoryRisk} = require("../src/rank");
const {voyageRisk} = require("../src/rank");

const voyage = {
  zone: 'china',
  length: 4,
};

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 8,
  },
];

rankTest('voyage length is 5', t => {
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };

  const result = voyageRisk(voyage);

  const expectResult = 3;

  t.is(result,expectResult);
});

rankTest('voyage length is 9', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };

  const result = voyageRisk(voyage);

  const expectResult = 4;

  t.is(result,expectResult);
});

rankTest('voyage length is 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };

  const result = voyageRisk(voyage);

  const expectResult = 1;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and history has zone is china', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = captainHistoryRisk(voyage, history);

  const expectResult = 4;

  t.is(result,expectResult);
});

rankTest('voyage do not has zone is china and history has zone is china', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = captainHistoryRisk(voyage, history);

  const expectResult = 6;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and history has zone is china and length is 5', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = captainHistoryRisk(voyage, history);

  const expectResult = 0;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and history do not has zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history);

  const expectResult = 3;

  t.is(result,expectResult);
});

rankTest('voyage has zone is east-indies and history do not has zone is china', t => {
  const voyage = {
    zone: 'east-indies',
    length: 4,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history);

  const expectResult = 3;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and history has zone is china and length is 4', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = voyageProfitFactor(voyage, history);

  const expectResult = 6;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and history has zone is china and length is 11', t => {
  const result = voyageProfitFactor(voyage, history);

  const expectResult = 7;

  t.is(result,expectResult);
});

rankTest('voyage has zone is china and length is 19 and history has zone is china and length is 11', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };

  const result = voyageProfitFactor(voyage, history);

  const expectResult = 7;

  t.is(result,expectResult);
});

rankTest('voyage do not has zone is china and length is 19 and history has zone is china and length is 11', t => {
  const voyage = {
    zone: 'china1',
    length: 19,
  };

  const result = voyageProfitFactor(voyage, history);

  const expectResult = 2;

  t.is(result,expectResult);
});

rankTest('test rating and result is A', t => {
  const result = rating(voyage, history);

  const expectResult = 'A';

  t.is(result,expectResult);
});

rankTest('test rating and result is B', t => {
  const voyage = {
    zone: 'china1',
    length: 19,
  };

  const result = rating(voyage, history);

  const expectResult = 'B';

  t.is(result,expectResult);
});