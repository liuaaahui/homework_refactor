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
  let deliveryTime;
  if (deliveryStateInclude(['MA', 'CT', 'NY',], anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if (deliveryStateInclude(['ME', 'NH',], anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return deliveryTime;
}

function deliveryDate (anOrder, isRush) {
  let deliveryTime = isRush ? getDeliveryTimeIsRush(anOrder)+1 : getDeliveryTimeIsNotRush(anOrder)+2;
  return getPlusDays(anOrder, deliveryTime);
}

module.exports = {
  deliveryDate
};
