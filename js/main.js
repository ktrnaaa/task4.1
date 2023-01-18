let elBTN1 = document.querySelector('.btn1');

let elCount = document.querySelector('.item-counter');

let elItemPrice = document.querySelector('.money');

let elBTN2 = document.querySelector('.btn2')
let elFullPrice = document.querySelector('.fullprice');
let elAddBtn = document.querySelector('.addBTN');






//////// add item

elBTN1.addEventListener ( 'click', () => {

    console.log ('тик');

   function num1(){   

         elCount.innerText = ++elCount.innerText ;
   }
   num1();
    function num11() {
            
             const b = elCount.innerText;
             const d = elItemPrice.innerText;

             elFullPrice.innerHTML =  b*d;}
    num11();

});







//////// add item


/////// delete item

elBTN2.addEventListener ( 'click', () => {

    console.log ('тик');
    function num2(){

        const b = elCount.innerText;

        if (parseInt(elCount.innerText) > 0 ){
        elCount.innerText = --elCount.innerText ;
    }}
    num2();

    function num22(){

         const b = elCount.innerText;
         const d = elItemPrice.innerText;

    elFullPrice.innerHTML =  b*d;
}
num22();}
);



/////// delete item



/// add to card

window.addEventListener('click', function(event)
{
    if (event.target.hasAttribute('addbtn')){

        console.log('тиць у кошик')
    }
});

/// add to card


