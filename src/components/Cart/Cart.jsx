import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let totalPrice = 0;
    let totalSeeping = 0;
    let quantity = 0
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        //product.quantity =product.quantity||1
        totalPrice = totalPrice + product.price * product.quantity;
        totalSeeping = totalSeeping + product.shipping
        quantity = quantity + product.quantity
    }

    const tax = totalPrice * 7 / 100;
    const Grandtotal = totalPrice + totalSeeping + tax;

    return (
        <div className='cart-item'>
            <h3>Order summery</h3>
            <p>select item: {quantity}</p>
            <p>Total price:${totalPrice}</p>
            <p>Total seeping:{totalSeeping}</p>
            <p>Total Tax:${tax.toFixed(2)}</p>
            <h3>Grand Total:{Grandtotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;