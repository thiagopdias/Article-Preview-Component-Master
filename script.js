let clickToShare = document.querySelector('.clickShare')
let shareIcons = document.querySelector('.share')
let buttonShare = document.querySelector('.buttonShare')

clickToShare.addEventListener('click', () => {
    clickToShare.classList.toggle('visibleShare')
    shareIcons.classList.toggle('visible')
})

buttonShare.addEventListener('click', () => {
    clickToShare.classList.toggle('visibleShare')
    shareIcons.classList.toggle('visible')
})