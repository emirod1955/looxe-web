//import styles
import './Footer.css';

//import react router
import { Link } from 'react-router-dom';

//img
import MercadoPago from './assets/MercadoPago.svg';
import PayPal from './assets/PayPal.svg';


const Footer = () =>{
    const PaymentCard = ({img}) =>{
        return(
            <span><img src={img} alt="payment" /></span>
        );
    }
    return(
        <footer className='footerBottom'>
            <p className='footerBottomMadeBy'>Made by <Link className='footerBottomAuth' to="https://twitter.com/im_EmiRod">Emiliano Rodriguez</Link></p>
            <p className='footerBottomLooxe'>&copy; LOOXE</p>
            <div className='footerBottomPay'>
                <p>We accept</p>
                <PaymentCard img={MercadoPago}/>
                <PaymentCard img={PayPal}/>
            </div>
        </footer>
    );
}

export {Footer}
