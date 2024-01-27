import './Home.css';

//import img
import winter2024 from '../../assets/winter2024.jpg';
import summer2025 from '../../assets/summer2025.jpg';
import winter2025 from '../../assets/winter2025.jpg';


const Header = () =>{
    return(
        <header>
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

const CollectionsPreview = () =>{
    return(
        <section className='collectionsPreview'>
            <div className='collection1'>
                <img src={winter2024} alt="Winter 2024 collection" />
                <p>2024 winter collection</p>
            </div>
            <div className="collection2">
                <img src={summer2025} alt="Summer 2025 collection" />
                <p>2025 summer collection</p>
            </div>
            <div className="collection3">
                <img src={winter2025} alt="Winter 2025 collection" />
                <p>2025 winter collection</p>
            </div>
        </section>
    );
}

const Home = () =>{
    return(
        <div className='home'>
            <Header />
            <CollectionsPreview />
        </div>
    );
}

export {Home}