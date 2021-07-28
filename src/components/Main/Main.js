import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import './Main.css';

function Main(props) {
    
    return (
        <>
            <div className="mainpage">
                <Header
                    header = {true}
                />
            </div>
            <section className="main-info">
                <div className='cardlist'>
                    <h1 className='cardlist__head'>Заголовок</h1>
                    <div className="cardlist__container-cards">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </>
    )
}

export default Main;
