//import styles
import './Product.css'

//import react router
import { Link } from 'react-router-dom';

const Product = ({imgID, name, color, price, link}) =>{
    return(
        <Link to={link} className='products'>
            <span id={imgID}></span>
            <div className='productInfo'>
                <div className='titleColorLine'>
                    <p className='productName'>{name}</p>
                    <span className='productColor' style={{ backgroundColor: color}}></span>
                </div>
                <p>${price}</p>
            </div>
        </Link>
    );
}

export {Product}