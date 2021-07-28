import './Card.css';
import {Link} from 'react-router-dom';
import Logo from '../../image/logo.png';


function Card(props) {
    
    return (
        <div className='card'>
            <img src={Logo} className='card__image'/>
            <p className='card__text'>Rob-o</p>
        </div>
    )
}

export default Card;
