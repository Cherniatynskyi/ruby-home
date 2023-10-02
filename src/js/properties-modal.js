import MicroModal from 'micromodal';

MicroModal.init();


const refs = {
    modalContainer: document.querySelector('.render-modal'),
    modal: document.querySelector('#modal-1'),
    properiesList: document.querySelector('.popular-list'),
    propertyBtn: document.querySelector('.property-button'),
}

refs.properiesList.addEventListener('click', onPropertyBtnClick)


function onPropertyBtnClick(evt) {
    if (evt.target.nodeName === "BUTTON") {
        const cardEl = evt.target.parentElement.parentElement
        const cardData = {
            imgSrc: cardEl.querySelector('img').src,
            title: cardEl.querySelector('h3').textContent.trim(),
            location: cardEl.querySelector('a').textContent.trim(),
            locationLink: cardEl.querySelector('a').href,
            rooms: cardEl.querySelectorAll('li'),
            price: cardEl.querySelector('span').textContent.trim()
        }
        console.log(cardData)

        const propertyModalMarkup = `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                    <div
                        class="modal__container"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-1-title"
                    >
                        <header class="modal__header">
                            <h2 class="modal__title" id="modal-1-title">
                                ${cardData.title}
                            </h2>
                            <button
                                class="modal__close"
                                aria-label="Close modal"
                                data-micromodal-close
                            ></button>
                        </header>
                        <main class="modal__content" id="modal-1-content">
                            <div class="modal-content-container">
                            <img class="modal-img" src="${cardData.imgSrc}"></img>
                                <div class="modal-content-stats">
                                    <a class="modal-location" href="">
                                        ${cardData.location}</a
                                    >
                        
                                    <ul class="modal-rooms-list">
                                        <li class="modal-rooms-item">Bedrooms: ${cardData.rooms[0].textContent}</li>
                                        <li class="modal-rooms-item">Dinnings: ${cardData.rooms[1].textContent}</li>
                                        <li class="modal-rooms-item">Bathrooms: ${cardData.rooms[2].textContent}</li>
                                    </ul>
                                    <span class="modal-property-cost">${cardData.price}</span>
                                </div>
                            </div>
                            <p class="modal-desc">New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                        </main>
                        <footer class="modal__footer">
                            <button
                                class="modal__btn"
                                data-micromodal-close
                                aria-label="Close this dialog window"
                            >
                                Close
                            </button>
                        </footer>
                    </div>
                </div>
            </div>`
        refs.modalContainer.innerHTML = propertyModalMarkup
        MicroModal.show('modal-1')
    }
}

