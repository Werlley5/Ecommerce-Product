//menu mobile

const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.mobile-cont');

hamburger.addEventListener('click', () => {

    container.classList.toggle('show-menu')


});

//---------------------------------------

//slider

document.getElementById('radio1').checked = true;

//---------------------------------------

//carrinho de compras

function openCart() {

    let add = document.querySelector('.cart-cont');

    add.classList.add('open');

};


function closeCart() {

    let add = document.querySelector('.cart-cont');

    add.classList.remove('open');
};

//----------------------------------------

//contador

const value = document.getElementById('value');
const quant = document.getElementById('quant');

let contador = 1;

function countPlus() {

    contador++
    visualisation()
    valorTotalSoma()

};

function countMinus() {
   
    if(contador === 1) {
        document.getElementById('minus').ariaDisabled = true;
    }else {
        document.getElementById('minus').ariaDisabled = false;
        contador--
        visualisation()
        valorTotalMenos()
    }

};

function visualisation() {
    value.innerText = contador;
    quant.innerText = contador;
};
visualisation();

function valorTotalSoma() {

    let priceId = document.getElementById('cart-price');
    let price = 125.00 
    let count = price * contador;

    priceId.innerText = count.toFixed(2);

    return priceId

};

function valorTotalMenos() {

    let priceId = document.getElementById('cart-price');
    let price = 125.00 
    let count = price *- contador;
    let countPositivo = Math.abs(count)

    priceId.innerText = countPositivo.toFixed(2);

    return priceId

};

//--------------------------------------

//adicionar ao carrinho

function addCart() {

    let add = document.querySelector('.cart-card');
    let msg = document.querySelector('.msg-cart');

    add.classList.add('add');
    msg.style = 'display: none;'
    openCart()

};

function removeCart() {

    let add = document.querySelector('.cart-card');
    let msg = document.querySelector('.msg-cart');

    add.classList.remove('add');

    msg.style = 'display: block;'

};

//--------------------------------------

//slider mobile

const control = document.querySelectorAll('.control');
let currentItem = 0;
const itens = document.querySelectorAll('.item');
const maxItens = itens.length;

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItens) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItens - 1;
        }

        itens.forEach(item => item.classList.remove('current-item'));
        itens[currentItem].scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
        });

    });
});

//--------------------------------------

//slider light-box

const slide = document.querySelectorAll('.slide');

    slide.forEach(slide => {
        
        slide.addEventListener('click', () => {

        document.querySelector('.light-box').classList.add('open-lb')
    });
    

});

function closeLb() {

    document.querySelector('.light-box').classList.remove('open-lb')

};

//---------------------------------------