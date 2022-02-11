 
//handle deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
    const deposit=document.getElementById('deposit-amount').value;
    const balance=document.getElementById('balance').innerText;
    console.log(deposit)
    console.log(balance.innerText)
   // const depositamount=deposit.value;
   const previousDeposit= document.getElementById('depo').innerText;
  const newDepo=parseFloat(deposit)
  document.getElementById('depo').innerText=newDepo;
   console.log(previousDeposit)
   //balance
   prevBalance=parseFloat(balance);
   newBalance=prevBalance + newDepo;
   document.getElementById('balance').innerText=newBalance;

   //const newDeposit=parseFloat(previousDeposit) + parseFloat(depositamount);
   //console.log(previousDeposit) 
   //balance.innerText=1200+newDeposit;
    
 });
//withdraw
 document.getElementById('withdraw-btn').addEventListener('click',function(){
var withdrawAmount=document.getElementById('withdraw-amount').value;
//console.log(withdrawAmount)
var withdrawing=parseFloat(withdrawAmount);
console.log(withdrawing)
prevWithdraw=document.getElementById('withdraw').innerHTML;
prevWithdrawAmount=parseFloat(prevWithdraw)
document.getElementById('withdraw').innerHTML=withdrawing;
//balance
const balancing=document.getElementById('balance').innerText;
const reduceBalance=parseFloat(balancing);
const finalBalance=reduceBalance - withdrawing;

document.getElementById('balance').innerText=finalBalance;
 });
//  document.getElementById('depo').addEventListener('click',function(){
//  });