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

    const PreFooterBox = ({img, title, text}) =>{
        return(
            <div className='preFooterBox'>
                <img src={img} alt="truck" />
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        );
    }

    return(
        <div className='preFooter'>
            <hr />
            <div className='preFooterBoxes'>
                <PreFooterBox img={truck} title="FREE SHIPPING" text="If your purchase exceeds $2000 you have free shipping within the country"/>
                <PreFooterBox img={card} title="PAY AS YOU WANT" text="We accept payment online or in cash"/>
                <PreFooterBox img={padlock} title="SAFE DATA" text="Don't worry, your data is more than safe."/>
            </div>
            <hr />
            <div className='footerNavigation'>
                <div className='footerNavigationColumn'>
                    <h2>LOOXE</h2>
                    <p id='contactMail'>help@looxe.com</p>
                    <div className='socialNetworks'>
                        <Link to="https://www.instagram.com/" target='_blank'><img src={instagram} alt="instagram" /></Link>
                        <Link to="https://twitter.com/" target='_blank'><img src={twitter} alt="twitter" /></Link>
                        <Link to="https://www.tiktok.com/" target='_blank'><img src={tiktok} alt="tiktok" /></Link>
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