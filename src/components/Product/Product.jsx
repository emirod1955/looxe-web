//import styles
import './Product.css'

//import react router
import { Link } from 'react-router-dom';

const Product = ({imgID, name, color, price, link, sizes}) =>{
    let sizesResult = []; 
 
    sizes.forEach(size =>{
        sizesResult.push(
            <span className='size'>{size}</span>
        );
    });
    return(
        <article className='products'>
            <Link to={link} id={imgID}></Link>
            <div className='productInfo'>
                <div className='productInfoLeft'>
                    <div className='ProductNameColorLine'>
                        <p className='productName'>{name}</p>
                        <span className='productColor' style={{ background: color}}></span>
                    </div>
                    <sapn>${price}</sapn>
                </div>
                <div className='sizes'>
                    {sizesResult}
                </div>
            </div>
        </article>
    );
}

export {Product}