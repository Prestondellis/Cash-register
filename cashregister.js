function checkCashRegister(price, cash, cid) {
  var cashReg = Object.values(cid).reverse()
  var emptyReg = [ 
    [ 'ONE HUNDRED', 0 ],
    [ 'TWENTY', 0 ],
    [ 'TEN', 0 ],
    [ 'FIVE', 0 ],
    [ 'ONE', 0 ],
    [ 'QUARTER', 0 ],
    [ 'DIME', 0 ],
    [ 'NICKEL', 0 ],
    [ 'PENNY', 0 ]]
  var currency = [ 
    [ 'ONE HUNDRED', 100 ],
    [ 'TWENTY', 20 ],
    [ 'TEN', 10 ],
    [ 'FIVE', 5 ],
    [ 'ONE', 1 ],
    [ 'QUARTER', 0.25 ],
    [ 'DIME', 0.1 ],
    [ 'NICKEL', 0.05 ],
    [ 'PENNY', 0.01 ]]
  console.log(cashReg)
  emptyReg[0][0] += 100
  let change = cash - price;
  let status = '' 
  if (change < 0){
    status += 'INSUFFICENT_FUNDS'
  } else if (change > )
  return 'status: "' + status + '"';
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
