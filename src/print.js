function getOutstanding(invoice){
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function getDueDate(){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing (invoice) {
  invoice.dueDate = getDueDate();
  let result = '***********************\n';
  result += '**** Customer Owes ****\n';
  result += '***********************\n';
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${getOutstanding(invoice)}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

module.exports = {
  printOwing
};