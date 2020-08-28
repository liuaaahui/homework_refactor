function getOutstanding(invoice){
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function printOwing (invoice) {
  let result = '***********************\n';
  result += '**** Customer Owes ****\n';
  result += '***********************\n';

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${getOutstanding(invoice)}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

module.exports = {
  printOwing
};