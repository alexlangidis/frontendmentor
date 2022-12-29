const btnSubmit = document.querySelector('.btn');
const btnRating = document.querySelectorAll('.btn-rating');
const ratingBox = document.querySelector('.rating-box');
const thanksBox = document.querySelector('.thanks-box');
const selectedStars = document.querySelector('.selected-stars');

let rate = 0;

btnRating.forEach((button) => {
    button.addEventListener('click', () => {
        const valueRate = button.dataset.value;
        rate = valueRate;
        // Remove the active class from all buttons
        btnRating.forEach((b) => b.classList.remove('active'));
        // Add the active class to the clicked button
        button.classList.add('active');
    });  
});



btnSubmit.addEventListener('click', ()=> {
    btnRating.forEach((button) => {
        if (button.classList.contains('active')) {
            ratingBox.style.display = 'none';
            thanksBox.style.display = 'flex';
            ratingStar();
        }
    });
});



function ratingStar() {
    const p = document.createElement('p');
    p.innerHTML = `You selected ${rate} out of 5`;

    selectedStars.appendChild(p);
}
