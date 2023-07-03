import Carousel from '../components/carousel'
import { useEffect } from "react";
import slides from '../data/sliderData'
function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="product">
            <div className="d-flex">
                <p className="categoryText">Товары / Мебель / Кресла / <span>Кресло Барселона</span></p>
            </div>

            <div className="productSide">
                <div className="leftProductSide">
                    <Carousel slides={slides}/>
                </div>   
                <div className="rightProductSide">
                    <div className='productTitleBox'>
                        <h1 className='productTitle'>Кресло Барселона</h1>
                        <p className='productSubtitle'>Ludwig Mies van der Rohe 1929</p>
                    </div>

                    <div className='productDescrBox'>
                        <p className='productDescr'>Кресло Barcelona, ​​один из самых узнаваемых предметов прошлого века и икона современного движения, излучает простую элегантность, олицетворяющую самый известный принцип Мис ван дер Роэ: «меньше значит больше».</p>
                    </div>

                    <div className='productColorBox'>
                        <p className='productColorText'>Выберите цвет:</p>
                        <div className='d-flex'>
                            <div className='productColor'></div>
                            <div className='productColor'></div>
                            <div className='productColor'></div>
                            <div className='productColor'></div>  
                        </div>
                        
                    </div>

                    <div className='productOrderBox'>
                        <div className='d-flex'>
                            <p className='productOrderPrice'>$6738</p>
                            <div className='d-flex mb-25'>
                                <p className='counter'>-</p>
                                <p className='counterNumber'>1</p>
                                <p className='counter'>+</p>
                            </div>
                        </div>

                        <p className='productOrderTextOffer'>Бесплатная доставка в <span>Москву</span></p>

                        <div className='d-flex align-center'>
                            <button className='productOrderButton'>Добавить в корзину</button>
                            <img width={28} height={28} src="/img/heart.svg" alt="#"/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product;