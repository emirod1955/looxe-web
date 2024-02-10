//import styles
import './Help.css';

//import react router
import { Link } from 'react-router-dom';

//import img
import truck from '../../assets/icon/truck.svg';
import card from '../../assets/icon/card.svg';
import folder from './assets/folder.svg';

const HelpHeader = () =>{
    return(
        <header>
            <div className='helpCenter'>
                <div className='helpCenterTitle'>
                    <h1>WELCOME TO LOOXE HELP CENTER</h1>
                    <p>How can we help you?</p>
                </div>
                <div className='helpCenterInputs'>
                    <input type="email" name="" id="helpCenterInputsEmail" placeholder='Your email'/>
                    <input type="text" name="" id="helpCenterInputsQuestion" placeholder='Ask a Question'/>
                </div>
                <input type="submit" value="ASK FOR HELP" id='helpCenterInputsSubmit'/>
            </div>
        </header>
    );
}

const HelpCard = ({img, title, txt}) =>{
    return(
        <Link to="/" className='helpCard'>
            <img src={img} alt="img"/>
            <div className='helpCardInfo'>
                <h3>{title}</h3>
                <p>{txt}</p>
            </div>
        </Link>
    );
}

const Help = () =>{
    return(
        <div className='helpPage'>
            <HelpHeader/>
            <div className='quickHelp'>
                <h2>QUICK HELP</h2>
                <div className='quickHelpBlocks'>
                    <HelpCard img={truck} title="SHIPPING" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    <HelpCard img={card} title="PAYMENTS" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    <HelpCard img={folder} title="POLICY" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                </div>
            </div>
        </div>
    );
}

export {Help}