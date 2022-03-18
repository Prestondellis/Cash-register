function checkCashRegister(price, cash, cid) {
  var cashReg = [] // creates a new var for the cash register
  for (let i = 0; i < cid.length; i++){ // loops through the cash in drawer
    let num = (cid[i][1] * 100) // multiplies the money by 100 to avoid long decimals
    let roundedNum = parseFloat(num).toPrecision(5) // rounds the numbers to avoid decimals
    cashReg.unshift(roundedNum) // adds the new numbers to the cash register
  }
  var emptyReg = [  // creates an empty register to keep track of the change given
    [ 'ONE HUNDRED', 0 ],
    [ 'TWENTY', 0 ],
    [ 'TEN', 0 ],
    [ 'FIVE', 0 ],
    [ 'ONE', 0 ],
    [ 'QUARTER', 0 ],
    [ 'DIME', 0 ],
    [ 'NICKEL', 0 ],
    [ 'PENNY', 0 ]]
  var currency = [ // sets the values for the money
    [ "ONE HUNDRED", 10000 ],
    [ "TWENTY", 2000 ],
    [ "TEN", 1000 ],
    [ "FIVE", 500 ],
    [ "ONE", 100 ],
    [ "QUARTER", 25 ],
    [ "DIME", 10 ],
    [ "NICKEL", 5 ],
    [ "PENNY", 1 ]]
  let changeNeeded = (cash * 100) - (price * 100); // sets how much change is needed
  let changeCount = 0 // keeps track of how much change is being taken out of the register
  for (let i = 0; i < cashReg.length; i++){ // loops through the register
    changeCount += emptyReg[i][1]  // adds the total change given to the change count
  }  
  for (let i = 0; i < cashReg.length; i++){ // loops through the cash register
    if (changeCount < changeNeeded  // if the change given is less than the change given
    && currency[i][1] <= changeNeeded - changeCount // if the currency is less than or equal to the difference between the change needed and the total change given
    && cashReg[i] > 0){ // if the cash register still has money for that currency
      changeCount += currency[i][1] // add the money to the change count
      cashReg[i] -= currency[i][1] // takes the money out of the cash register
      emptyReg[i][1] += currency[i][1] //adds the money to the empty register(change given)
      if (cashReg[i] !== 0 && currency[i][1] <= changeNeeded - changeCount){ 
        i -= i //if the cash register is not empty and there is still money left in the  required currency spot restart the loop
      }
    }
  }
  var result = { // sets the result variable up 
     status: '', 
     change: [] 
  } 
  let remainingZero = 0 // keeps track of how many spots in the register are now empty
  for (let i = 0; i < cashReg.length; i++){ // loops throught the register
    if (cashReg[i] == 0){ // if that spot in the register is empty
      remainingZero += 1 // adds one to the remaining Zeros count
    }
  }
  for (let i = 0; i < cashReg.length; i++){ // loops through the register
    if (remainingZero === 9){ // if the register is empty
      result.change.push([cid[i][0], cid[i][1]]) // add the cash in drawer amount to change
    }
    else if (emptyReg[i][1] > 0 && remainingZero !== 9){
      //if change given for a currency is not empty and if the cash register is not empty
      result.change.push([currency[i][0], (emptyReg[i][1] * 0.01)])
      // adds the currency and amount given to the result change
    }
  }
  if (changeNeeded < 0 || changeNeeded - changeCount !== 0){ // if there is not enought money in the register or if there is not enought money to pay for the price
    result.status += 'INSUFFICIENT_FUNDS' //makes reult status = insufficient funds
    result.change.splice(0) //takes out anything that could be in change
  } else if (changeNeeded > 0 && remainingZero !== 9){ // if there needs to be change given and the cash register is not empty after giving it 
    result.status += 'OPEN' // sets results to open
  } else if (remainingZero === 9){ //if the cash register is empty after giving the change
    result.status += 'CLOSED' // sets results status to closed
  }
  return result 
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
