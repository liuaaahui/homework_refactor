function deliveryStateInclude(include, deliveryState){
  return include.includes(deliveryState);
}

function getPlusDays(anOrder, deliveryTime) {
  return anOrder.placedOn.plusDays(deliveryTime);
}

function getDeliveryTimeIsRush(anOrder) {
  let deliveryTime;
  if (deliveryStateInclude(['MA', 'CT',], anOrder.deliveryState)) {
    deliveryTime = 1;
    deliveryStateInclude(['ME', 'NH',], anOrder.deliveryState)
  } else if (deliveryStateInclude(['NY', 'NH',], anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return deliveryTime;
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
