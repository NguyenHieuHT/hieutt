
document.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.querySelector('.openOverlay');
    const closeBtn = document.querySelector('#closeOverlay');
    const overlay = document.querySelector('.o-modal');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    });


    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });


});
