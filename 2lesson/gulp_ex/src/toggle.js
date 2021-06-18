
let btnDate = document.querySelector('.btn-date');
let dateBlock = document.querySelector('.date');
let btnTimer = document.querySelector('.btn-timer');
let timerBlock = document.querySelector('.timer');

btnDate.addEventListener('click', () => {
    timerBlock.style.display = 'none'
    dateBlock.style.display = 'block'
});

btnTimer.addEventListener('click', () => {
    dateBlock.style.display = 'none'
    timerBlock.style.display = 'block'
})

