function StateInclude(voyage){
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone);;
}

function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if (StateInclude(voyage)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function extracted(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (extracted(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function resultHandle(history, voyage) {
  let result = 0;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function handleResult(history, voyage) {
  let result = 0;
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (StateInclude(voyage)) {
    result += 1;
  }
  if (extracted(voyage, history)) {
    result += 3;
    result += resultHandle(history, voyage);
  }
  else {
    result += handleResult(history, voyage);
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  voyageRisk,captainHistoryRisk,voyageProfitFactor,rating
};
