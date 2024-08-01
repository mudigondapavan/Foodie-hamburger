const hamburger = document.querySelector('.hamburger-container')
const menuOpen = document.querySelector('header')
const menuClose = document.querySelector('.close')
const go = document.querySelector('h3')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')


nav.addEventListener('click',(e)=>{
    e.stopPropagation()
    menuOpen.classList.add('menu-open')
})


hamburger.addEventListener('click',(e)=>{
    e.stopPropagation()
    menuOpen.classList.add('menu-open')
})

menuClose.addEventListener('click',(e)=>{
    e.stopPropagation()
    menuOpen.classList.remove('menu-open')
})
window.addEventListener('click',()=>{
    menuOpen.classList.remove('menu-open')
})

go.addEventListener('click', ()=>{
    container.scrollTo(0, 0)
})

