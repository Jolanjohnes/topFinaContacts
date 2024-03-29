const buttonOpen = document.getElementById('buttonOpen')
const buttonClose = document.getElementById('buttonClose')
const menu = document.getElementById('menu')
const header = document.querySelector('header')
const main = document.querySelector('main')
const links = document.querySelectorAll('.menu ul li')

function test() {
  console.log('Ok')
}

window.addEventListener('scroll', showMenuOnScroll)
buttonOpen.addEventListener('click', toogleMenu)
buttonClose.addEventListener('click', toogleMenu)
links.forEach(e => {
  e.addEventListener('click', toogleMenu)
})

function toogleMenu() {
  buttonOpen.classList.toggle('toggleButtonMenu')
  buttonClose.classList.toggle('toggleButtonMenu')
  menu.classList.toggle('showMenu')
  main.classList.toggle('menuExpanded')
}

function showMenuOnScroll() {
  if (scrollY > 80) {
    header.classList.add('activeHeaderScroll')
  } else {
    header.classList.remove('activeHeaderScroll')
  }
}
