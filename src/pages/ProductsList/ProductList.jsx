//import react
import { useEffect, useState } from 'react'

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
    const [colorFilter, setColorFilter] = useState([]);

    const [checkBoxState, setCheckBoxState] = useState([false, false, false])

    const checkbox = (e, pos) =>{
        if(e.target.checked==true){
            setColorFilter([...colorFilter, e.target.value])
            setCheckBoxState(...checkBoxState[pos] = true)
        }

        if(e.target.checked==false){
            setColorFilter(colorFilter.filter(color => color !== e.target.value))
            setCheckBoxState(...checkBoxState[pos] = false)
        }
    }

    let filteredProducts = data.products.filter((product) =>
        colorFilter.some(colors => product.color.includes(colors))
    )

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
                        <input type="checkbox" name="Black" className="checkBox" value={"Black"} onChange={(e) => checkbox(e, 0)}/>
                        <label htmlFor="Black">Black</label>
                    </p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="White" className="checkBox" value={"White"} onChange={(e) => checkbox(e, 1)} />
                        <label htmlFor="White">White</label>
                    </p>
                    <p className='productListFilters-color'>
                        <input type="checkbox" name="Blue" className="checkBox" value={"Blue"} onChange={(e) => checkbox(e, 2)} />

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
                { 
                checkBoxState.every(item => item == false) ? 
                
                data.products.map((product) => (
                    <Product productCode={product.id}/>
                )) 
                
                : filteredProducts.map((product) => (
                    <li>
                        <Product productCode={product.id}/>
                    </li>
                ))}
            </ul>
            </section>
        </main>
    );
}

export {ProductList}