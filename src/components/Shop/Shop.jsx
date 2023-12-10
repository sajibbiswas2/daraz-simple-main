
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart, removeFromDb } from '../../utlitis/fakdb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step 1 get id of the added product
        for (const id in storedCart) {
            // step2get product from product statet by using id
            const addedProduct = products.find(product => product.id)
            if (addedProduct) {
                //step:3
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                //step:4 add the addedproduct to the saved cart
                saveCart.push(addedProduct)
            }
            console.log('added--product', addedProduct)

        }
        setCart(saveCart);
    }, [products])



    const handeladdtocart = (product) => {
        // let newcart = [];
        const newcart = [...cart, product]
        //if product doesn't exist in the cart ,then set quantity =1
        //if exist update quantity by 1
        // const exist = cart.find(pd => pd.id === product.id);
        // if (!exist) {
        //     product.quantity = 1;
        //     newcart = [...Cart, product]
        // }
        // else {
        //     exist.quantity = exist.quantity + 1;
        //     const remaining = cart.filter(pd => pd.id !== product.id);
        //     newcart = [...remaining, exist]
        // }
        setCart(newcart)
        addToDb(product.id)
    }

    const handelcrlearCart = () => {
        setCart([]);
        removeFromDb();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handeladdtocart={handeladdtocart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handelcrlearCart={handelcrlearCart}
                >
                    <Link className='proced-link' to="/Orders"><button className='btn-procure'>Review-oder <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </button></Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;