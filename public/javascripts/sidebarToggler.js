const toggle = document.querySelector('#toggle')
const navDesc = document.querySelector('#nav_desc')
const main = document.querySelector('#main')
toggle.addEventListener('click', function () {
  if (navDesc.classList.contains('slide-left-nav')) {
    navDesc.classList.remove('slide-left-nav')
    main.classList.remove('slide-left-main')
  } else {
    navDesc.classList.add('slide-left-nav')
    main.classList.add('slide-left-main')
  }
})
