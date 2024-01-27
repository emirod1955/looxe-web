//import react router
import { Link } from 'react-router-dom';

//import styles
import './PreFooter.css';

//import img
import truck from './assets/truck.svg';
import card from './assets/card.svg';
import padlock from './assets/padlock.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import tiktok from './assets/tiktok.svg';


const PreFooter = () =>{
    return(
        <div className='preFooter'>
            <hr />
            <div className='preFooterBoxes'>
                <div className='preFooterBox'>
                    <img src={truck} alt="truck" />
                    <h4>FREE SHIPPING</h4>
                    <p>If your purchase exceeds $2000 you have free shipping within the country</p>
                </div>
                <div className='preFooterBox'>
                    <img src={card} alt="card" />
                    <h4>PAY AS YOU WANT</h4>
                    <p>We accept payment online or in cash</p>
                </div>
                <div className='preFooterBox'>
                    <img src={padlock} alt="padlock" />
                    <h4>SAFE DATA</h4>
                    <p>Don't worry, your data is more than safe.</p>
                </div>
            </div>
            <hr />
            <div className='footerNavigation'>
                <div className='footerNavigationColumn'>
                    <h2>LOOXE</h2>
                    <p id='contactMail'>help@looxe.com</p>
                    <div className='socialNetworks'>
                        <Link to="https://www.instagram.com/" target='_blank'><img src={instagram} alt="instagram" /></Link>
                        <Link to="https://twitter.com/"><img src={twitter} alt="twitter" /></Link>
                        <Link to="https://www.tiktok.com/"><img src={tiktok} alt="tiktok" /></Link>
                    </div>
                </div>
                <div className='footerNavigationColumn'>
                    <Link to="/" id='footerNavigationColumnTitle'><h3>Home</h3></Link>
                    <Link to="/">Link</Link>
                    <Link to="/">Link</Link>
                </div>
                <div className='footerNavigationColumn'>
                    <Link to="/" id='footerNavigationColumnTitle'><h3>Collections</h3></Link>
                    <Link to="/">Link</Link>
                    <Link to="/">Link</Link>
                    <Link to="/">Link</Link>
                </div>
                <div className='footerNavigationColumn'>
                    <h3>Brand</h3>
                    <Link to="/">Link</Link>
                    <Link to="/">Link</Link>
                </div>
                <div className='newspaperFooter'>
                    <h3>Newspaper subscription</h3>
                    <p>Receive unique promotions and discounts</p>
                    <input type="email" name="" id="" placeholder='E-mail'/>
                </div>
            </div>
        </div>
    );
}

export {PreFooter}