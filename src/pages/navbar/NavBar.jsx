//import styles
import './NavBar.css';

//react router
import { NavLink } from "react-router-dom";

//import img
import search from './assets/search.svg';
import arrow from './assets/arrow.svg';
import cart from './assets/cart.svg';


const NavBar = () =>{
    return(
        <nav className='nav'>
            <section className='navTop'>
                <div className='navTitle'>
                    <p>LOOXE</p>
                </div>
                <div className='navUtilities'>
                    <div className='navLeft'>
                        <img src={search} alt="search icon" />
                        <input type="search" name="" id="navbarSearchInput" placeholder='Search for collection, color, etc.'/>
                    </div>
                    <div className='navRight'>
                        <p className='currencyMenu'>UYU $</p>
                        <div className='languageMenu'>
                            <p>ENG</p>
                            <img src={arrow} className='navImg' alt="arrow" />
                        </div>
                        <NavLink className='helpNavLink' to="/help">Help</NavLink>
                        <img src={cart} className='cart' alt="cart" />
                    </div>
                </div>
            </section>
            <section className='navBottom'>
                <div className='mid'>
                    <NavLink to="/" id='nav1'>Home</NavLink>
                    <NavLink to="/collections">Collections</NavLink>
                    <NavLink to="/">About us</NavLink>
                </div>
            </section>
        </nav>
    );
}

export {NavBar}