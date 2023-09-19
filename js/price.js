const container = document.querySelector('.price-container')
const priceEl = container.querySelector('.full-price')
const btnWhatsUp = priceEl.querySelector('.full-price-btn')
const formA = document.querySelector('.form-a')
const formWindow = document.querySelector('.modal-window')
let fullPrice = 0
let texts = []

formA.addEventListener('click', (e) => {
  e.preventDefault()
  formWindow.classList.remove('none')
  setTimeout(() => {
    formWindow.style.opacity = 1
  }, 200)
})

container.addEventListener('click', (e) => {
  let price, selected
  if (e.target.classList.contains('selected')) {
    price = e.target.parentElement
    selected = e.target.classList
    let textprice = price.querySelectorAll('p')
    textprice = `${textprice[0].textContent} за ${textprice[2].textContent}`
    if (selected.contains('none')) {
      fullPrice += +price.dataset.price
      texts.push(textprice)
    } else {
      texts = texts.filter((item) => {
        return item !== textprice
      })
      fullPrice -= +price.dataset.price
    }
    selected.toggle('none')
  }
  priceEl.firstElementChild.innerHTML = `Итоговая цена (со скидкой): <b style="font-size: 1.5rem">${fullPrice}</b> тг`
  let textForLink = ''
  texts.forEach((item, i) => {
    for (let j = 0; j < item.length; j++) {
      if (item[j] === ' ') {
        textForLink += '%20'
      } else textForLink += item[j]
    }
    textForLink += '%0A'
  })
  btnWhatsUp.href = `https://wa.me/77076821729?text=Здравствуйте.%20Интересует%20следующий%20пакет%20услуг:%0A${textForLink}Итоговая%20цена%20на%20сайте%20вышла%20в%20${fullPrice}тг.`
})

const prices = document.querySelectorAll('.price-header')
const pricesDescr = document.querySelectorAll('.description-p')
const priceBack = document.querySelector('.price-description')
const banners = [
  'img/photos/banner.jpg',
  'img/photos/banner2.jpg',
  'img/photos/banner3.jpg',
  'img/photos/asya.jpg',
]

prices.forEach((price, i) => {
  price.addEventListener('click', (e) => {
    e.preventDefault()
    changePrice(i, price)
  })
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
