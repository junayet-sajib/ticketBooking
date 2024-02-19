

const totalSeats = document.getElementsByClassName('seatBtn');

let totalNumSeats = parseInt(document.getElementById('total-seat-left').innerText);

let totalSeltedSeatNum = document.getElementById('total-selected-seat');
let showSeatId = document.getElementById('seleted-seat-number');
let cuponInputId = document.getElementById('coupon-input');
let totalPriceValue;
let singleTicketPrice = 550;
let ticketClass = 'economy';
let grandInitialTotal;
let elementValue;

let count = 0;




function handleUserClick(){
    let countSeat = totalNumSeats - 1;
        totalNumSeats = countSeat;
        document.getElementById('total-seat-left').innerText = totalNumSeats;
        console.log(totalNumSeats);
}


console.log( totalNumSeats);
// let countSeat = 40;
// console.log(totalSeats);

for(const seat of totalSeats){
    seat.addEventListener('click', function(event){
        console.log(event.target.value);

     elementValue = event.target.innerText;
        console.log('Seat Id ee' ,elementValue);
        // console.log(elementValue);
        const bgChangeId = event.target.id;
        console.log('btn ID', bgChangeId);
       
        // removeBgColor(bgChangeId);
        // showSeatName(bgChangeId, 550 , 'Delux');

        
        count = count + 1;

         if(count <= 4){
            totalSeltedSeatNum.innerText = count;
            setBgColor(bgChangeId);
            handleUserClick();
            createTable('tr', 'table-body', 'td', elementValue,ticketClass,  singleTicketPrice );

         const showTotalPrice = document.getElementById('totat-price-value');
        // const totalPrice = document.getElementById('totat-price-value').innerText;
         totalPriceValue = singleTicketPrice * count;
         grandInitialTotal = totalPriceValue;
     document.getElementById('grand-totat-price-text').innerText = grandInitialTotal;

        document.getElementById('totat-price-value').innerHTML = totalPriceValue;


         }else{
            alert('You can only Select 4 seat')
         }

        console.log('Count value',count);

       
    })
}




function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]')
}

function removeBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]')
}

function createTable(elemtentName1, showIdLoca, elemtentName2, itemElementValue1, itemElementValue2, itemElementValue3){
    // createTable('tr', 'table-body', 'td', elementValue);
    //
    const tableRow = document.createElement(elemtentName1);
    console.log(tableRow);
    let tableDes; 
    
     tableDes = document.createElement(elemtentName2);
     tableDes.innerText = itemElementValue1; //elementValue
     tableRow.appendChild(tableDes);

     let tableDes2 = document.createElement(elemtentName2);
     tableDes2.innerText = itemElementValue2;
     tableRow.appendChild(tableDes2);

     let tableDes3 = document.createElement(elemtentName2);
     tableDes3.innerText = itemElementValue3;
     tableRow.appendChild(tableDes3);

    
    const tableDataShow = document.getElementById(showIdLoca); //table-body
    tableDataShow.appendChild(tableRow);

}

function addHidden(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function removeHidden(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

const couponOne = 'NEW15';
const couponTwo = 'Couple 20';




var inputVal ;

function getInputValue(){
   if(count === 0){
   alert('please Select a seat');
   }else{
    //apply-btn-hide
    let discountAmountContainer = document.getElementById('discount-amount');
     // Selecting the input element and get its value 
     inputVal = document.getElementById("coupon-input").value;
     grandInitialTotal = totalPriceValue;
     document.getElementById('grand-totat-price-text').innerText = grandInitialTotal;
     document.getElementById('coupon-err-msg').innerText ='';
 
     if(inputVal === couponOne){
          grandInitialTotal = document.getElementById('grand-totat-price-text');
         grandInitialTotal = Math.ceil(totalPriceValue - (totalPriceValue * .15)); 
         
         let discountAmount = Math.ceil(-totalPriceValue * .15);

         const pNew = document.createElement('p');
         const textDisc = document.createElement('p');
         textDisc.innerText = 'Discount';
         pNew.innerText = discountAmount;
         console.log('Pnew',pNew);
         // discountAmountContainer.innerText = discountAmount;
         document.getElementById('discount-amount').appendChild(textDisc);
         document.getElementById('discount-amount').appendChild(pNew);

         document.getElementById('grand-totat-price-text').innerText =grandInitialTotal;
         addHidden('apply-btn-hide');
     }else if(inputVal === couponTwo){
          grandInitialTotal = document.getElementById('grand-totat-price-text');
         grandInitialTotal = Math.ceil(totalPriceValue - (totalPriceValue * .20)); 
         document.getElementById('grand-totat-price-text').innerText = grandInitialTotal;

         let discountAmount = Math.ceil(-totalPriceValue * .20);
         
         const pNew = document.createElement('p');
         const textDisc = document.createElement('p');
         textDisc.innerText = 'Discount';
         pNew.innerText = discountAmount;
         console.log('Pnew',pNew);
         // discountAmountContainer.innerText = discountAmount;
         document.getElementById('discount-amount').appendChild(textDisc);
         document.getElementById('discount-amount').appendChild(pNew);

         addHidden('apply-btn-hide');
     }else{
         let erroMsg = 'Enter Right Coupon';
         document.getElementById('coupon-err-msg').innerText = erroMsg;
     }


    
   }
    // Displaying the value
//  console.log(inputVal);
}

// function showModal(){
//     console.log("Hello form showModal");
  
// }
// function passengerInfo(){
//     var inputPassengerName = document.getElementById("passenger-name").value;
//     var inputPassengerNum = document.getElementById("passenger-number").value;
//     console.log(inputPassengerName, inputPassengerNum);
//     showModal();
// }


const numEmpty = document.getElementById('passenger-number');

numEmpty.addEventListener('change', function(){
    console.log('Passenger number',numEmpty.value);
    console.log(elementValue);
if(elementValue != "" && numEmpty.value != ''){
   document.getElementById('form-p-info-next-btn').classList.remove('btn-disabled');  

   //newCopy
} else{
   document.getElementById('form-p-info-next-btn').classList.add('btn-disabled');  

}

})

