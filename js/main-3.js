let elBTN5 = document.querySelector('.btn5');
let elBTN6 = document.querySelector('.btn6');
let elCount_3 = document.querySelector('.item-counter3');
let elItemPrice_3 = document.querySelector('.money-3');


elBTN5.addEventListener ( 'click', () => {

    console.log ('тик');

   function num5(){   

         elCount_3.innerText = ++elCount_3.innerText ;
        }
        num5();

    function num55() {
    
             const b = elCount_3.innerText;
             const d = elItemPrice_3.innerText;

             elFullPrice.innerHTML =  b*d;}
    num55();

});

elBTN6.addEventListener ( 'click', () => {

    console.log ('тик');
    function num6(){

        if (parseInt(elCount_3.innerText) > 0 ){
        elCount_3.innerText = --elCount_3.innerText ;
    }}
    num6();

    function num66(){

         const b = elCount_3.innerText;
         const d = elItemPrice_3.innerText;

    elFullPrice.innerHTML =  b*d;
}
num66();}
);