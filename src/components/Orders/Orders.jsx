
import { Link, useLoaderData } from 'react-router-dom'
import Revewitem from '../Revewitem/Revewitem';
import './Orders.css'
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { removeFromDb } from '../../utlitis/fakdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChainBroken } from '@fortawesome/free-solid-svg-icons';
const Orders = () => {
    const cart = useLoaderData();
    const [carts, setCarts] = useState(cart);

    const handeladdtoCart = (id) => {
        const remainingCart = carts.filter(product => product.id !== id);
        setCarts(remainingCart);
        removeFromDb(id);
    }

    const handelcrlearCart = () => {
        setCarts([]);

    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    carts.map(product => <Revewitem
                        key={product.id}
                        product={product}
                        handeladdtoCart={handeladdtoCart}
                    >

                    </Revewitem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={carts}
                    handelcrlearCart={handelcrlearCart}
                >
                    <Link className='proced-link' to="/checkout" >
                        <button className='btn-procure'>procure Checkout <FontAwesomeIcon icon={faChainBroken}></FontAwesomeIcon> </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;