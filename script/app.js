const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const inpBurger=document.getElementById('burger')
const inpName=document.getElementById('name')
const inpPhone=document.getElementById('phone')
const BtnOrder=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')
const orderMessage=document.querySelector('.common-title')

btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}

currencyBtn.onclick = () => {
    let currentCurrency = currencyBtn.innerText;
    let newCurrency = '$';
    let kurs = 0;

    if (currentCurrency === '$') {
        newCurrency = '€';
        kurs = 0.91;
    } else if (currentCurrency === '€') {
        newCurrency = 'C';
        kurs = 97.82;
    }

    for (let i = 0; i < prices.length; i++) {
        let basePrice = parseFloat(prices[i].getAttribute('data-base-price'));
        prices[i].innerText = (basePrice * kurs).toFixed(2) + ' ' + newCurrency;
    }

    currencyBtn.innerText = newCurrency;

    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

productsBtn.forEach((btn, index) => {
    btn.onclick = () => {
        document.getElementById('order').scrollIntoView({
            behavior: "smooth"
        });
        inpBurger.value = `${titles[index].innerText}-${prices[index].innerText}`;
    }
});

BtnOrder.onclick = () => {
    if (!inpName.value.trim()) {
        inpName.style.borderColor = 'red';
    } else {
        inpName.style.borderColor = '';
    }

    if (!inpPhone.value.trim()) {
        inpPhone.style.borderColor = 'red';
    } else {
        inpPhone.style.borderColor = '';
    }

    if (!inpBurger.value.trim()) {
        inpBurger.style.borderColor = 'red';
    } else {
        inpBurger.style.borderColor = '';
    }

    if (inpName.value.trim() && inpPhone.value.trim() && inpBurger.value.trim()) {
        orderMessage.innerText = 'Заказ оформлен!';
        orderMessage.style.color = 'green';
    } else {
        orderMessage.innerText = '';
    }
};