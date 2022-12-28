 //step-1:add event listener diposit button
 document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2: get the deposit amount from the diposit field
     //always remember use .value to get text from an input field
    const withdrawField=document.getElementById('withdraw-amount');
    const newwithdrawAmountString=withdrawField.value;
    const newwithdrawAmount=parseFloat(newwithdrawAmountString);
   
    //step-3: get the current diposit total
    //for the non input(element other than input, textarea )use innerText to get the text
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previouswithdrawTotalString=withdrawTotalElement.innerText;
    const previouswithdrawTotal=parseFloat(previouswithdrawTotalString);
    
    //step-4:add number to set the diposit element
    const currentwithdraw=newwithdrawAmount+previouswithdrawTotal;
   withdrawTotalElement.innerText=currentwithdraw;

    //step-5:get balance current total
    const balanceTotalElement=document.getElementById('balance-amount');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    //step-6: add number to set the total balance
    const TotalBalanced=previousBalanceTotal-newwithdrawAmount;
    balanceTotalElement.innerText=TotalBalanced;

    //step-7: deposit field none
    withdrawField.value="";


})    