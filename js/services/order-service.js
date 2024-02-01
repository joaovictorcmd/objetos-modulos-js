import { shipment } from "./shipping-service.js";

export function total(order) {
    const orderShipment = shipment(order);
    const discount = order.basic * (order.discount / 100);

    return (order.basic - discount) + orderShipment;
}