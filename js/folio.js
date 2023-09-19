const photoBlocks = document.querySelectorAll('.folio-photo')
const modal = document.querySelector('.modal')
photoBlocks.forEach((photoBlock) => {
  photoBlock.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('photo') ||
      e.target.classList.contains('vert-photo')
    ) {
      modal.classList.remove('none')
      setTimeout(() => {
        modal.style.opacity = 1
      }, 200)
      const img = e.target.style.backgroundImage
      modal.firstElementChild.src = img.slice(5, img.length - 2)
      setTimeout(() => {
        modal.addEventListener(
          'click',
          () => {
            console.log('VBBV')
            modal.style.opacity = 0
            setTimeout(() => modal.classList.add('none'), 200)
          },
          { once: true }
        )
      }, 100)
    }
  })
})

const folioNav = document.querySelector('.folio-nav')
function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    folioNav.style.bottom = '60px'
  } else folioNav.style.bottom = '0'
}
window.addEventListener('scroll', showModalByScroll)
