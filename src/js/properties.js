

const refs = {
    properiesList: document.querySelector('.popular-list'),
    heartIcon: document.querySelector('.heart-icon')
}

refs.properiesList.addEventListener('click', changeLikeBtn)

function changeLikeBtn(evt) {
    if (evt.target.classList.contains('heart-icon')) {
        if (evt.target.classList.contains('icon-active')) {
            evt.target.style.fill = "#bbbbbb"
            evt.target.classList.remove('icon-active')
            return
        }
        evt.target.classList.add('icon-active')
        evt.target.style.fill = "red"
    }
}