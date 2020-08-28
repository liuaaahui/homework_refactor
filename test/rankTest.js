const rankTest = require('ava');
const {voyageRisk} = require("../src/rank");

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