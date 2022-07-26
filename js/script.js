const menuBurger = document.querySelector(".toggle_menu");
const navLink = document.querySelector(".block_link")
menuBurger.addEventListener('click', ()=>{
    navLink.classList.toggle('menu')
})

