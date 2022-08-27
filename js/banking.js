
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const newAmountText = inputValue.value;
    const newTotalAmount = parseFloat(newAmountText);

    // clear the deposit input field
    inputValue.value = '';

    return newTotalAmount;
}

function innerFieldTotal(innerFieldId, newDepositAmount){
    // debugger;
    const depositTotal = document.getElementById(innerFieldId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    depositTotal.innerText = previousDepositAmount + newDepositAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    
    
     if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
     }
     else{
        balanceTotal.innerText = previousBalanceTotal - amount;
     }
    //  balanceTotal.innerText = newBalanceTotal;
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    
    const newAmount = getInputValue('deposit-amount');
    if(newAmount > 0){
        innerFieldTotal('total-depo', newAmount);
        updateBalance(newAmount, true);
    }
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
   
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && currentBalance >= newWithdrawAmount){
        innerFieldTotal('withdraw-amount', newWithdrawAmount)
        updateBalance(newWithdrawAmount, false)
    }
    else{
        alert('You can not withdraw more then you have your account balance.')
    }
    

    // clear withdraw input
    // withdrawInput.value = '';
})


function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositText = depositInput.value;
    const depositTextParse = parseFloat(depositText);
    // clear the input value
    depositInput.value = '';
    return depositTextParse;
}

function textField(){
    const depositTotal = document.getElementById('total-depo');
    console.log(depositTotal)
    const depositTotalText = depositTotal.innerText;
    const depositTotalParse = parseFloat(depositTotalText);
    return depositTotalParse;
}

// my code
// handle deposit 
// document.getElementById('deposit-btn').addEventListener('click', function(){
//     // const depositInput = document.getElementById('deposit-amount');
//     // const depositText = depositInput.value;
//     // const depositTextParse = parseFloat(depositText);
//     const depositTextParse = getInputValue('deposit-amount');
    
//     // fix the inner text
//     // const depositTotal = document.getElementById('total-depo');
//     // const depositTotalText = depositTotal.innerText;
//     // const depositTotalParse = parseFloat(depositTotalText);
//     // depositTotal.innerText =  depositText;

//     // Add deposit input and inner text
//     const  newDepositSavings =  depositTextParse + depositTotalParse;
//     const depositTotalParse = textField(newDepositSavings);
//     // depositTotal.innerText = newDepositSavings;

//     // update balance total
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalance = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalance + depositTextParse;
//     balanceTotal.innerText = newBalanceTotal;  
// });

// // Handle withdraw
// document.getElementById('withdraw-btn').addEventListener('click', function(){
//     // const withdrawInput = document.getElementById('withdraw-input')
//     // const withdrawInputText = withdrawInput.value;
//     // const withdrawInputAmount = parseFloat(withdrawInputText);
//     const withdrawInputAmount = getInputValue('withdraw-input');

//     // Handle withdraw Amount
//     const withdrawAmount = document.getElementById('withdraw-amount');
//     const withdrawText = withdrawAmount.innerText;
//     const withdrawParse = parseFloat(withdrawText);
    
//     // Update withdrawTotal
//     const withdrawTotal = withdrawInputAmount + withdrawParse;
//     withdrawAmount.innerText = withdrawTotal;
//     // withdrawInput.value = '';

//     // update withdraw with balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalParse =parseFloat(balanceTotalText);
//     const newBalanceTotal = balanceTotalParse - withdrawInputAmount;
//     balanceTotal.innerText = newBalanceTotal;
// })