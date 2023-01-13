//МЕНЮ

const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu-container ul')
const prevBtn = document.querySelector('.prevbtn')
const nextBtn = document.querySelector('.nextbtn')
const servicebox = document.querySelector('.services')
const itemWidth = servicebox.querySelector('.service').clientWidth
const banners = ['banner.jpg', 'banner2.jpg', 'banner3.jpg', 'asya.jpg']
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

nextBtn.addEventListener('click', scrollToNextItem)
prevBtn.addEventListener('click', scrollToPrevItem)

function scrollToNextItem() {
  servicebox.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' })
}
function scrollToPrevItem() {
  servicebox.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' })
}

//ПРАЙС

const prices = document.querySelectorAll('.price-header')
const pricesDescr = document.querySelectorAll('.description-p')
const priceBack = document.querySelector('.price-description')

prices.forEach((price, i) => {
  console.log(i)
  price.addEventListener('click', () => changePrice(i, price))
})

function changePrice(i, price) {
  prices.forEach((_price) => {
    _price.classList.remove('active-price')
  })
  price.classList.toggle('active-price')
  pricesDescr.forEach((descr) => descr.classList.add('none'))
  pricesDescr[i].classList.remove('none')
  priceBack.style.backgroundImage = `url('${banners[i]}')`
}
