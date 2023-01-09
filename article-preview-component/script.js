const btnSocial = document.querySelector('.share-icon')
const cardShare = document.querySelector('.card__share')


btnSocial.addEventListener('click', ()=>{
    if (cardShare.classList.contains('disabled')){
        cardShare.classList.remove('disabled');
        btnSocial.classList.add('share-icon-clicked');

    } else{
        cardShare.classList.add('disabled');
        btnSocial.classList.remove('share-icon-clicked');
    }
})