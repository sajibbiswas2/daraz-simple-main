import './Revewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Revewitem = ({ product, handeladdtoCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='revew-item'>
            <img src={img} alt="" />
            <div className='review-detels'>
                <p className='name-container'>{name.slice(0, 20)}....</p>
                <p> price:${price}</p>
                <p>quantity:{quantity}</p>
            </div>
            <button onClick={() => handeladdtoCart(id)} className='button-delete'><FontAwesomeIcon icon={faTrash} /></button>

        </div>
    );
};

export default Revewitem;