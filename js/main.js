import Order from "./models/order.js";
import { total } from "./services/order-service.js";

function enter() {
    const code = Number(document.querySelector('#order-code').value);
    const basic = Number(document.querySelector('#order-basic').value);
    const discount = Number(document.querySelector('#order-discount').value);

    const order = new Order(code, basic, discount);
    
    console.log(`Pedido código ${order.code}\nValor total: R$ ${(total(order)).toFixed(2)}`);
}

const button = document.querySelector('.btn');
button.addEventListener('click', enter);