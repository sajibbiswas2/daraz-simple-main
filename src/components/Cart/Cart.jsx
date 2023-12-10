import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const { cart, handelcrlearCart, children } = props
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
            <br />

            <button onClick={handelcrlearCart} className='clear-cart'>
                clear cart
                <FontAwesomeIcon icon={faTrash}

                ></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;