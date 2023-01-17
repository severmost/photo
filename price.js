const container = document.querySelector('.price-container')
const priceEl = container.querySelector('.full-price')
let fullPrice = 0
container.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.firstElementChild) {
    let selected = e.target.firstElementChild.classList
    if (selected.contains('selected') && selected.contains('none')) {
      selected.toggle('none')
      fullPrice += +e.target.dataset.price
    }
  } else if (e.target.classList.contains('selected')) {
    e.target.classList.toggle('none')
    fullPrice -= +e.target.parentElement.dataset.price
  }
  priceEl.firstElementChild.innerHTML = `Итоговая цена: <b style="font-size: 1.5rem">${fullPrice}</b> тг`
  console.log(priceEl.firstChild)
  console.log(e.target)
  console.log(fullPrice)
})
