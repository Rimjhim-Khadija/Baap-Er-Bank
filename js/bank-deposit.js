//step-1:add event listener diposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount from the diposit field
     //always remember use .value to get text from an input field
    const dipositField=document.getElementById('deposit-amount');
    const newdipositAmountString=dipositField.value;
    const newdipositAmount=parseFloat(newdipositAmountString);
   
    //step-3: get the current diposit total
    //for the non input(element other than input, textarea )use innerText to get the text
    const dipositTotalElement=document.getElementById('diposit-total');
    const previousdipositTotalString=dipositTotalElement.innerText;
    const previousdipositTotal=parseFloat(previousdipositTotalString);
    
    //step-4:add number to set the diposit element
    const currentDoposit=newdipositAmount+previousdipositTotal;
    dipositTotalElement.innerText=currentDoposit;

    //step-5:get balance current total
    const balanceTotalElement=document.getElementById('balance-amount');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    //step-6: add number to set the total balance
    const TotalBalanced=previousBalanceTotal+newdipositAmount;
    balanceTotalElement.innerText=TotalBalanced;

    //step-7: deposit field none
    dipositField.value="";





})




   