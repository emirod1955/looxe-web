import './Home.css';

//import img
import winter2024 from '../../assets/winter2024.jpg';
import summer2025 from '../../assets/summer2025.jpg';
import winter2025 from '../../assets/winter2025.jpg';

// import components
import { Product } from '../../components/Product/Product';
 
const Header = () =>{
    return(
        <header className='homeHeader'>
            <div className='headerBackground'>
                <span className='headerLeft'></span>
                <span className='headerRight'></span>
            </div>
            <div className='headerBlock'>
                <div className='headerContent'>
                    <p id='pradaQuote'>"What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." — Miuccia Prada</p>
                    <p id='discountText'>GET UP TO <span id='discountColor'>50%</span> OFF</p>
                </div>
                <div className='headerTitle'>
                    <h1 id='headerTitleBlack'>LOOXE</h1>
                    <h1 id='headerTitleWhite'>LOOXE</h1>
                </div>
            </div>
        </header>
    );
}

const Collection = ({img, text}) =>{
    return(
        <div className='collection'>
            <img src={img} alt="Collection image" />
            <p>{text}</p>
        </div>
    );
}

const Home = () =>{

    return(
        <div className='home'>
            <Header />
            <section className='collectionsPreview'>
                <Collection img={winter2024} text="2024 winter collection"/>
                <Collection img={summer2025} text="2025 summer collection"/>
                <Collection img={winter2025} text="2025 winter collection"/>
            </section>
            <div className='newReleasesBackground'>NEW RELEASES NEW RELEASES NEW RELEASES</div>
            <div className='newArrivals'>
                <div className='newArrivalsBox'>
                    <span className='newArrivalsTitle'><h2>NEW ARRIVALS</h2></span>
                    <div className='productsList'>
                        <Product productCode={0}/>
                        <Product productCode={1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}