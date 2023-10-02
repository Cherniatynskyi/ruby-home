const refs = {
    heroMenu: document.querySelector('.hero-menu_subsection'),
    locationBtn: document.querySelector('#region-select'),
    typeBtn: document.querySelector('#type-select'),
    typeBtn: document.querySelector('#price-select'),
    regionDropperEl: document.querySelector('#region-dropper'),
    typeDropperEl: document.querySelector('#type-dropper'),
    priceDropperEl: document.querySelector('#price-dropper'),
    regionDropperList: document.querySelector('#region-dropper-list'),
    typeDropperList: document.querySelector('#type-dropper-list'),
    priceDropperList: document.querySelector('#price-dropper-list'),
    dropperItem: document.querySelector('.dropper-item'),
}

refs.heroMenu.addEventListener('click', onSelectBtnClick)
refs.regionDropperList.addEventListener('click', selectionItem)
refs.typeDropperList.addEventListener('click', selectionItem)
refs.priceDropperList.addEventListener('click', selectionItem)



function onSelectBtnClick(evt) {
    if (!evt.target.hasAttribute("data-select")) {
        return
    }
    if (evt.target.id === 'region-select') {
        refs.regionDropperEl.classList.toggle('visually-hidden')
        refs.typeDropperEl.classList.add('visually-hidden')
        refs.priceDropperEl.classList.add('visually-hidden')
    }
    else if (evt.target.id === 'type-select') {
        refs.typeDropperEl.classList.toggle('visually-hidden')
        refs.regionDropperEl.classList.add('visually-hidden')
        refs.priceDropperEl.classList.add('visually-hidden')
    }
    else if (evt.target.id === 'price-select') {
        refs.priceDropperEl.classList.toggle('visually-hidden')
        refs.regionDropperEl.classList.add('visually-hidden')
        refs.typeDropperEl.classList.add('visually-hidden')
    }
}

function selectionItem(evt) {
    if (evt.target.nodeName !== 'LI') {
        evt.currentTarget.parentElement.classList.add('visually-hidden')
        return
    }
    evt.currentTarget.parentElement.previousSibling.previousSibling.textContent = evt.target.textContent
    evt.currentTarget.parentElement.classList.add('visually-hidden')
}

