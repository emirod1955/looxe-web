//import styles
import './Product.css'

//import react router
import { Link } from 'react-router-dom';

//import database
import data from "../../types/products.json"

const Product = ({productCode}) =>{
    let sizesResult = []; 
 
    data[productCode].sizes.forEach(size =>{
        sizesResult.push(
            <div className='sizeText'>
                {size}
                <span className='tooltipSize'>quick add</span>
            </div>
        );
    });
    return(
        <article className='products'>
            <Link to={data[productCode].link} id={data[productCode].imgID}></Link>
            <div className='productInfo'>
                <div className='productInfoLeft'>
                    <div className='ProductNameColorLine'>
                        <p className='productName'>{data[productCode].name}</p>
                        <span className='productColor' style={{ background: data[productCode].color}}></span>
                    </div>
                    <sapn>${data[productCode].price}</sapn>
                </div>
                <div className='sizes'>
                    {sizesResult}
                </div>
            </div>
        </article>
    );
}

export {Product}