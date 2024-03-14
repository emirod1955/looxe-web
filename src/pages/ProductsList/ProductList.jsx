//import react
import { useState } from 'react'

//import styles
import './ProductList.css'

//import components
import { Product } from '../../components/Product/Product'

//import data
import data from '../../types/products.json'


const ProductList = () =>{
    // const [minPriceFilter, setMinPriceFilter] = useState('');
    // const [maxPriceFilter, setMaxPriceFilter] = useState('');
    // const [sizeFilter, setSizeFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');

    const filteredProducts = data.products.filter((product) => 
         product.color.toLowerCase().includes(colorFilter.toLowerCase())
    );

    return(
        <main className='productList'>
            <section className='productListFilters'>
                <div className='productListFilters-price'>
                    <h3>Price</h3>
                    <p>Enter a price range</p>
                     <div className='productListFilters-price-Inputs'>
                        <input className='productListFilters-price-Input' type="text" placeholder='min'/>
                        <input className='productListFilters-price-Input' type="text" placeholder='max'/>
                        <input id='productListFilters-price-InputSubmit' type="submit" value="GO" />
                     </div>
                </div>
                <hr />
                <form className='productListFilters-colors'>
                    <h3>Color</h3>
                    <p>Select colors</p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="Black" id="" value={"Black"} onChange={(e) => setColorFilter(e.target.value)} />
                        <label htmlFor="Black">Black</label>
                    </p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="White" id="" value={"White"} onChange={(e) => setColorFilter(e.target.value)} />
                        <label htmlFor="White">White</label>
                    </p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="Blue" id="" value={"Blue"} onChange={(e) => setColorFilter(e.target.value)} />
                        <label htmlFor="Blue">Blue</label>
                    </p>
                </form>
                <hr />
                <form className='productListFilters-colors'>
                    <h3>Size</h3>
                    <p>Select a size</p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="S" id="" />
                        <label htmlFor="S">S</label>
                    </p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="M" id="" />
                        <label htmlFor="M">M</label>
                    </p>
                    <p className='productListFilters-color'>
                    <input type="checkbox" name="L" id="" />
                    <label htmlFor="L">L</label>
                </p>
                <p className='productListFilters-color'>
                    <input type="checkbox" name="XL" id="" />
                    <label htmlFor="XL">XL</label>
                </p>
                <p className='productListFilters-color'>
                    <input type="checkbox" name="XXL" id="" />
                    <label htmlFor="XXL">XXL</label>
                </p>
            </form>
        </section>
        <section className='productListProducts'>
            <ul>
                {filteredProducts.map((product) => (
                    <li>
                        <Product productCode={product.id}/>
                    </li>
                ))}
                {console.log(colorFilter)}
            </ul>
            </section>
        </main>
    );
}

export {ProductList}