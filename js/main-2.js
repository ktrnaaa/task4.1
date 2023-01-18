let elBTN3 = document.querySelector('.btn3');
let elBTN4 = document.querySelector('.btn4');

let elCount_2 = document.querySelector('.item-counter2');

let elItemPrice_2 = document.querySelector('.money-2');


elBTN3.addEventListener ( 'click', () => {

    console.log ('тик');

   function num3(){   

         elCount_2.innerText = ++elCount_2.innerText ;
        }
        num3();
    

    function num33() {
    
             const b = elCount_2.innerText;
             const d = elItemPrice_2.innerText;

             elFullPrice.innerHTML =  b*d;}

    num33();

   }
);


elBTN4.addEventListener ( 'click', () => {

    console.log ('тик');
    function num4(){
        if (parseInt(elCount_2.innerText) > 0 ){
        elCount_2.innerText = --elCount_2.innerText ;
    }}
    num4();

    function num44(){

         const b = elCount_2.innerText;
         const d = elItemPrice_2.innerText;

    elFullPrice.innerHTML =  b*d;
}
num44();}
);