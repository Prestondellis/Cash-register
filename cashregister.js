function checkCashRegister(price, cash, cid) {
  var cashReg = []
  for (let i = 0; i < cid.length; i++){
    let num = (cid[i][1] * 100)
    let roundedNum = parseFloat(num).toPrecision(5)
    cashReg.unshift(roundedNum)
  }
  //console.log(cashReg)
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
  let changeNeeded = (cash * 100) - (price * 100);
  //console.log(change)
  let changeCount = 0
  //console.log(change - changeCount)
  for (let i = 0; i < cashReg.length; i++){
    changeCount += emptyReg[i][1] 
  }  
  for (let i = 0; i < cashReg.length; i++){
    if (changeCount < changeNeeded 
    && currency[i][1] <= changeNeeded - changeCount 
    && cashReg[i] > 0 && i >= 0){
      changeCount += currency[i][1]
      cashReg[i] -= currency[i][1]
      emptyReg[i][1] += currency[i][1]
      //console.log(currency[i][1])
      if (cashReg[i] !== 0 && currency[i][1] <= changeNeeded - changeCount){
        i -= i
      }
    }
  }
  //console.log(cashReg)
  //console.log(changeCount)
  //console.log(change - changeCount)
  //console.log(emptyReg)
  var result = {
     status: '',
     change: [] 
  } 
  for (let i = 0; i < cashReg.length; i++){
    console.log(emptyReg[i][1])
    if (price === cash){
      result.change.push(cid).reverse
    }
    else if (emptyReg[i][1] > 0 && changeNeeded - changeCount === 0){
      result.change.push([currency[i][0], (emptyReg[i][1] * 0.01)])
    }
  }
  if (changeNeeded < 0 || changeNeeded - changeCount !== 0){
    result.status += 'INSUFFICIENT_FUNDS'
  } else if (changeNeeded > 0){
    result.status += 'OPEN'
  } else if (price === change){
    result.status += 'CLOSED'
  }
  return result
}
//console.log({status: "INSUFFICIENT_FUNDS", change: []})
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
