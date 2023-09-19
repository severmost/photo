const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu-container ul')

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('active')
  this.classList.toggle('active')
})

window.onscroll = function () {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop // Получаем положение скролла
  if (scrolled !== 0) {
    // Если прокрутка есть, то делаем блок прозрачным
    document.querySelector('header').style.backgroundColor = '#222'
    document.querySelector('header').style.opacity = '0.9'
  } else {
    // Если нет, то делаем его полностью видимым
    document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0)'
    document.querySelector('header').style.opacity = '1'
  }
}
