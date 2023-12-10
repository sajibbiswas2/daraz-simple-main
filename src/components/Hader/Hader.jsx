
import './Hader.css'
import logo from '../../imagess/images.jpeg';
import { Link } from 'react-router-dom';
const Hader = () => {
    return (
        <div className='Header'>
            <img className='logo' src={logo} alt="" />
            <div className='hader-name'>

                <Link to="/shop">shop</Link>
                <Link to="/Orders">orders</Link>
                <Link to="invantoey">invantoey</Link>
                <Link to="login">login</Link>
            </div>
        </div>
    );
};

export default Hader;