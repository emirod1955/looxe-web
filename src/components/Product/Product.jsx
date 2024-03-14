//import react router
import { Link } from 'react-router-dom';

//import styles
import './Product.css'

//import database
import data from "../../types/products.json"

const Product = ({productCode}) =>{

    let sizesResult = []; 
    
    data.products[productCode].sizes.forEach(size =>{
        sizesResult.push(
            <div className='sizeText'>
                {size}
                <span className='tooltipSize'>quick add</span>
            </div>
        );
    });

    return(
        <article className='products'>
            <Link to={data.products[productCode].link} id={data.products[productCode].imgID}></Link>
            <div className='productInfo'>
                <div className='productInfoLeft'>
                    <div className='ProductNameColorLine'>
                        <p className='productName'>{data.products[productCode].name}</p>
                        <span className='productColor' style={{ background: data.products[productCode].color}}></span>
                    </div>
                    <sapn>${data.products[productCode].price}</sapn>
                </div>
                <div className='sizes'>
                    {sizesResult}
                </div>
            </div>
        </article>
    );
}

export {Product}