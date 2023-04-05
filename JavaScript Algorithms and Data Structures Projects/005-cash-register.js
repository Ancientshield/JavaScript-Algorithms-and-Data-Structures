function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = cid.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);

  if (totalCID < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (totalCID === changeDue) {
    return {status: "CLOSED", change: cid};
  }

  let changeArr = cid.reduceRight((acc, curr) => {
    let value = currencyValues[curr[0]];
    let availableCash = curr[1];
    let returnedCash = 0;

    if (changeDue >= value) {
      returnedCash = Math.floor(changeDue / value) * value;
      if (returnedCash > availableCash) {
        returnedCash = availableCash;
      }
      changeDue -= returnedCash;
      changeDue = Math.round(changeDue * 100) / 100;
      acc.push([curr[0], returnedCash]);
    }
    return acc;
  }, []);

  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: changeArr};
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

/*
Explanation of the code:

currencyValues object is used to store the value of each currency unit.
changeDue is the amount of change due to the customer.
totalCID is the total amount of cash available in the drawer.
Check if there is sufficient cash available in the drawer to give the change due to the customer. If not, return {status: "INSUFFICIENT_FUNDS", change: []}.
Check if the total amount of cash available in the drawer is equal to the change due to the customer. If yes, return {status: "CLOSED", change: cid}.
If there is enough cash available in the drawer to give the change due to the customer, then start iterating through the cid array from the end. For each currency unit, calculate the amount of cash to be returned to the customer, if any.
If the amount of cash to be returned to the customer is greater than the available cash of that currency unit in the drawer, then return the available cash of that currency unit.
If the amount of cash to be returned to the customer is less than the available cash of that currency unit in the drawer, then subtract the returned cash from the change due and push the currency unit and the returned cash to the changeArr array.
Repeat steps 6-8 for all currency units in the cid array.
If there is still some change due after iterating through all the currency units in the cid array, then return {status: "INSUFFICIENT_FUNDS", change: []}.
If there is no change due after iterating through all the currency units in the cid array, then return {status: "OPEN", change: changeArr}.
*/