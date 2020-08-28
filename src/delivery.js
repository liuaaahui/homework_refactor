function deliveryStateInclude(include, deliveryState){
  return include.includes(deliveryState);
}

function getPlusDays(anOrder, deliveryTime) {
  return anOrder.placedOn.plusDays(1 + deliveryTime);
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
  if (isRush) {
    let deliveryTime = getDeliveryTimeIsRush(anOrder);
    return getPlusDays(anOrder, deliveryTime);
  }
  else {
    let deliveryTime = getDeliveryTimeIsNotRush(anOrder);
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
