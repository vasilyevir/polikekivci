import './Header.css';
import {Link} from 'react-router-dom';
import Logo from '../../image/logo.png';


function Header(props) {
    
    return (
        <div className='header'>
            <div className='header__logo-container'>
                <img src={Logo} className='logo'/>
                <p className="header__logo-name">Rob-o</p>
            </div>
            <div className="header__nav-bar">
                <Link className="header__link" to='/'>Главная</Link>
                <Link className="header__link">Галерея</Link>
                <Link className="header__link" to='/aboutus'>О нас</Link>
                <Link className="header__link">Контакты</Link>
            </div>
        </div>
    )
}

export default Header;
