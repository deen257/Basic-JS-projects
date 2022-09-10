document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-btn');
    const close = document.querySelector('.close-btn');
    const overlay = document.querySelector('.modal-overlay');


modal.addEventListener('click', () =>{
    overlay.classList.toggle('open-modal');
})

close.addEventListener('click', () => {
    overlay.classList.remove('open-modal');
})

})