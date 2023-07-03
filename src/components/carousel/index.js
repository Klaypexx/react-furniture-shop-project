import { useState } from "react";
import style from './Carousel.module.scss'

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyle = {
        width: '569px',
        height: '455px',
        margin: '0 57px 0 57px',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className={style.sliderStyles}>
            <div className={style.sliderBox}>
                <img className={style.leftArrowStyles} onClick={goToPrevious} src='/img/leftArrow.svg' alt='/'></img>
                <div style={slideStyle}></div>
                <img className={style.rightArrowStyles} onClick={goToNext} src='/img/rightArrow.svg' alt='/'></img>
            </div>
            
            <div className={style.sliderImageBox}>
                {slides.map((slide, slideIndex) => (
                    <img
                        key={slideIndex}
                        src={slides[slideIndex].url}
                        className={`${style.slideImage} ${slideIndex === currentIndex ? style.activeSlideImage : ""}`}
                        onMouseEnter={() => goToSlide(slideIndex)}
                        alt="/"
                    >
                    </img>
                ))}
            </div>
        </div>
    )
}

export default Carousel