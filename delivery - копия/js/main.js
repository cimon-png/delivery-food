const cartBtn = document.querySelector('#card-btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const cloyse = document.querySelector('.cloyse')
const logModal = document.querySelector('.login-modal');
const logBtn = document.querySelector('#btn-log');
const closee = document.querySelector('#close');

cartBtn.addEventListener('click', function (event){
    modal.classList.add('active')
});
logBtn.addEventListener('click', function (event){
    logModal.classList.add('active')
});
closee.addEventListener('click', function (event){
    logModal.classList.remove('active');
});

close.addEventListener('click', function (event){
    modal.classList.remove('active');
});
cloyse.addEventListener('click', function (event){
    modal.classList.remove('active');
});

new WOW().init();