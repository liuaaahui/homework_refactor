function deliveryStateInclude(include, deliveryState){
  return include.includes(deliveryState);
}

function getPlusDays(anOrder, deliveryTime) {
  return anOrder.placedOn.plusDays(deliveryTime);
}

function getDeliveryTimeIsRush(anOrder) {
  return deliveryStateInclude(['MA', 'CT',], anOrder.deliveryState) ? 1 : deliveryStateInclude(['NY', 'NH',], anOrder.deliveryState) ? 2 : 3;
}

function getDeliveryTimeIsNotRush(anOrder) {
  return deliveryStateInclude(['MA', 'CT', 'NY',], anOrder.deliveryState) ? 2 : deliveryStateInclude(['ME', 'NH',], anOrder.deliveryState) ? 3 : 4;
}

function deliveryDate (anOrder, isRush) {
  let deliveryTime = isRush ? getDeliveryTimeIsRush(anOrder)+1 : getDeliveryTimeIsNotRush(anOrder)+2;
  return getPlusDays(anOrder, deliveryTime);
}

module.exports = {
  deliveryDate
};
