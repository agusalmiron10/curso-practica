const MenuEmail=document.querySelector('.navbar-email')
const DestokpMenu=document.querySelector('.desktop-menu')

MenuEmail.addEventListener('click',ToggleDesktop);

function ToggleDesktop(){
    DestokpMenu.classList.toggle('inactive')
}



    

const Hamburguesa=document.querySelector('.menu')
const mobilemenu=document.querySelector('.mobile-menu')


 Hamburguesa.addEventListener('click',ToggleHamburguesa);

 function ToggleHamburguesa(){
    mobilemenu.classList.toggle('inactive');
 }




 const menucarritoicon=document.querySelector('.navbar-shopping-cart');
 const aside=document.querySelector('.product-detail');


 menucarritoicon,addEventListener('click',toggleaside)

 function toggleaside(){
    aside.classList.toggle('inactive');
 }
