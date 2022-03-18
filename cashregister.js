function checkCashRegister(price, cash, cid) {
  var cashReg = []
  for (let i = 0; i < cid.length; i++){
    let num = (cid[i][1] * 100)
    let roundedNum = parseFloat(num).toPrecision(5)
    cashReg.unshift(roundedNum)
  }
  console.log(cashReg)
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
    [ 'ONE HUNDRED', 10000 ],
    [ 'TWENTY', 2000 ],
    [ 'TEN', 1000 ],
    [ 'FIVE', 500 ],
    [ 'ONE', 100 ],
    [ 'QUARTER', 25 ],
    [ 'DIME', 10 ],
    [ 'NICKEL', 5 ],
    [ 'PENNY', 1 ]]
  //console.log(cashReg)
  let change = (cash * 100) - (price * 100);
  //console.log(change)
  let changeCount = 0
  //console.log(change - changeCount)
  for (let i = 0; i < cashReg.length; i++){
    changeCount += emptyReg[i][1] 
  }  
  for (let i = 0; i < cashReg.length; i++){
    if (changeCount < change && currency[i][1] <= change - changeCount && cashReg[i] > 0 && i >= 0){
      changeCount += currency[i][1]
      cashReg[i] -= currency[i][1]
      emptyReg[i][1] += currency[i][1]
      console.log(currency[i][1])
      if (cashReg[i] !== 0 && currency[i][1] <= change - changeCount){
        i -= i
      }
    }
  }
  console.log(cashReg)
  console.log(changeCount)
  console.log(change - changeCount)
  console.log(emptyReg)
  
  let status = ''; 
  if (change < 0){
    status += 'INSUFFICENT_FUNDS'
  } else if (change > 0){
    status += 'OPEN'
  }
  return 'status: "' + status + '"';
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
