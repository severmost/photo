const container = document.querySelector('.price-container')
const priceEl = container.querySelector('.full-price')
const btnWhatsUp = priceEl.querySelector('.full-price-btn')
let fullPrice = 0
let texts = []
container.addEventListener('click', (e) => {
  let price, selected
  if (e.target.firstElementChild) {
    price = e.target
    selected = price.firstElementChild.classList
    if (e.target.classList.contains('price-text')) {
      price = e.target.parentElement
      selected = price.firstElementChild.classList
    }

    if (price.classList.contains('price') && selected.contains('none')) {
      selected.toggle('none')
      fullPrice += +price.dataset.price
      let textprice = price.querySelectorAll('p')
      texts.push(`${textprice[0].textContent} за ${textprice[1].textContent}`)
    }
  } else if (e.target.classList.contains('selected')) {
    e.target.classList.toggle('none')
    let delText = e.target.parentElement.querySelectorAll('p')
    delText = `${delText[0].textContent} за ${delText[1].textContent}`
    texts = texts.filter((item) => {
      return item !== delText
    })
    fullPrice -= +e.target.parentElement.dataset.price
  }
  priceEl.firstElementChild.innerHTML = `Итоговая цена: <b style="font-size: 1.5rem">${fullPrice}</b> тг`
  let textForLink = ''
  texts.forEach((item, i) => {
    for (let j = 0; j < item.length; j++) {
      if (item[j] === ' ') {
        textForLink += '%20'
      } else textForLink += item[j]
    }
    textForLink += '%0A'
  })
  console.log(textForLink)
  btnWhatsUp.href = `https://wa.me/77076821729?text=Здравствуйте.%20Интересует%20следующий%20пакет%20услуг:%0A${textForLink}Итоговая%20цена%20на%20сайте%20вышла%20в%20${fullPrice}тг.`
})
