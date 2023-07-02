import style from './Card.module.scss'

function Card(props) {
    return (
        <div className={style.card}>
            <a href="/" className={style.cardPreviewImage}>
              <div className={style.cardPreview}>
                  <img src={props.imgUrl} alt="#"></img>

              </div>  
            </a>
            <div className={style.cardText}>
              <a href="/" className={style.cardHeading}>{props.title}</a>
              <a href="/" className={style.cardCash}>{props.price}</a>
            </div>
            <div className="d-flex pb-20">
              <button className={style.cardButton}>В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className={style.cardHeart}/>
            </div>
        </div>
    )
}

export default Card;