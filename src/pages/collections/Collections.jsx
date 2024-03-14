//import react router
import { Link } from 'react-router-dom';

//Import styles
import './Collections.css';

//import img
import allProducts from './assets/allProducts.jpg'
import winter2024 from '../../assets/winter2024.jpg';
import summer2025 from '../../assets/summer2025.jpg';
import winter2025 from '../../assets/winter2025.jpg';


const CollectionsCard = ({img, title, link}) =>{
    return(
        <div className='collectionsCard'>
            <img src={img} alt="collection image" />
            <div className='collectionsCardInfo'>
                <h2>{title}</h2>
                <Link to={link}><input type="button" value="VIEW PRODUCTS" /></Link>
            </div>
        </div>
    );
}

const Collections = () =>{
    return(
        <div className='collections'>
                <section className='collectionsCards'>
                    <CollectionsCard img={allProducts} title="ALL PRODUCTS" link="/products"/>
                    <CollectionsCard img={winter2025} title="WINTER 2025" link="/products"/>
                    <CollectionsCard img={summer2025} title="SUMMER 2025" link="/products"/>
                    <CollectionsCard img={winter2024} title="WINTER 2024" link="/products"/>
                </section>
        </div>
    );
}

export {Collections}