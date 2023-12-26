const modalFunc = () => {
    const modal = document.querySelector('.card-modal__overlay');
    const modalBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    }

    const closeModal = () => {
        modal.classList.remove('open');
    }

    modalBtn.addEventListener('click', () => {
        openModal();
    })

    modal.addEventListener('click', (event) => {
        if(event.target.classList.contains('card-modal__overlay') || event.target.closest('.card-modal__header--close')) { //делаем проверку на наличие класса .card-modal__overlay и проверяем наличие у родителя кнопки Х класса .card-modal__header--close
            closeModal(); // только при этих условиях срабатывает закрытие модального окна
        }
    })
}

modalFunc();

const restsFunc = () => {

}

const countFunc = () => {
    const btnDecrease = document.getElementsByClassName('decrease');
    const btnIncrease = document.getElementsByClassName('increase');
    const countProducts = document.getElementsByClassName('card-item__controls--count');
    const price = document.querySelectorAll('.card-item__controls--price');
    const sumPrice = document.getElementsByClassName('card-modal__footer--price');
    console.log(btnDecrease);
    console.log(btnIncrease);
    console.log(countProducts);
    console.log(price);
    console.log(sumPrice);

    for (let i = 0; i < btnDecrease.length; i++){
        btnDecrease[i].addEventListener('click', () => {
            let count = parseInt(countProducts[i].innerHTML);
            if (count > 0) {
                countProducts[i].innerHTML = count - 1;
                priceProducts();
            }
        })
    }

    for (let i = 0; i < btnIncrease.length; i++){
        btnIncrease[i].addEventListener('click', () => {
            let count = parseInt(countProducts[i].innerHTML);
            countProducts[i].innerHTML = count + 1;
            priceProducts();
        })
    }
    // const priceProducts = () => {
    //     for(let i = 0; i < price.length; i++) {
    //         let sumPriceProduct = parseInt(price[i].innerHTML);
    //         let count = parseInt(countProducts[i].innerHTML);
    //         sumPrice.innerHTML = price[i].innerHTML * count;
    //     }
    // }
}

countFunc();