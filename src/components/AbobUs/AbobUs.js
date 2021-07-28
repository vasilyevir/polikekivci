import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import Logo from '../../image/logo.png'
import Eyes from '../../image/Глаза.png'
import Relsy from '../../image/рельсы.png'
import Lampa from '../../image/лампа.jpg'
import None from '../../image/undefined.jpg'
import './AbobUs.css';

function AbobUs(props) {
    
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
                        <Card/>
                    </div>
                    <div className='text-info'>
                        <p className='text-info__introduction'>Мы начинающая команда робототехников из Санкт-Петербургского политехнического университета 
                        Петра Великого. За два года обучения мы сделали несколько проектов, некоторые из них, выкладываем для 
                        демонстрации сюда. Больше фотографий можно увидеть в галерее</p>
                        <div className='text-info__project'>
                            <img src={Lampa} className='text-info__project-image'/>
                            <p className='text-info__project-text'>Лучшие подарки на любой праздник - подарки сделанные с душой. 
                            Именно так и решила наша команда и подошла это с творческим подходом.
                            Данный проект - первый совместный, в котором были сделаны акриловые светильники,
                            управляемые из приложения в телефоне. Благодаря оптическим свойствам акрила, рельефный
                            рисунок красиво раскрашивается в цвета светодиодов, а легкое подключения данной лампы к Wi-Fi
                            позволяет легко управлять ею с личного мобильного телефона. Есть множество исполнений данной лампы,
                            больше можно увидеть в галерее. </p>
                        </div>
                        <div className='text-info__project text-info__project_reverse'>
                            <img src={Relsy} className='text-info__project-image'/>
                            <p className='text-info__project-text'>Один из первых глобальных проектов нашей команды - шасси для газонокосилки,
                            выполненный по запросам заказчика. Данная конструкция должна была выдерживать
                            не только массу газонокосилки, но и не приминать траву при работе. Из-за специфики 
                            гусеничного полотна, пришлось делать натяжитель, собственную приводной барабан и множество
                            амортизаторов для пересеченной местности и мягкости движения.</p>
                        </div>
                        <div className='text-info__project'>
                            <img src={Eyes} className='text-info__project-image'/>
                            <p className='text-info__project-text'>Аниматронные глаза для антропоморфных роботов
                                Проект, который создавался для написания НИР, чтобы узнать реакцию людей на имитацию
                                реалистичного наблюдения при помощи FPV-камер. Для этого потребовалось создать плату
                                для преобразования I2C в ШИМ, а под эту задачу подошел чип PCA9685PW.</p>
                        </div>
                        <div className='text-info__project text-info__project_reverse'>
                            <img src={None} className='text-info__project-image'/>
                            <p className='text-info__project-text'>Данный проект создан для оптимизации поиска пути, как и прошлый проект, 
                            создавался для НИР, которая должна облегчить будущие расчеты в роботах-пауках.</p>
                        </div>
                        <div className='text-info__project'>
                            <img src={None} className='text-info__project-image'/>
                            <p className='text-info__project-text'>Аниматронные глаза для антропоморфных роботов
                                Проект, который создавался для написания НИР, чтобы узнать реакцию людей на имитацию
                                реалистичного наблюдения при помощи FPV-камер. Для этого потребовалось создать плату
                                для преобразования I2C в ШИМ, а под эту задачу подошел чип PCA9685PW.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </>
    )
}

export default AbobUs;
