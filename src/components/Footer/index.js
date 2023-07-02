import style from './Footer.module.scss'

function Footer() {
    return (
      <footer className={style.footer}>
        <div className={style.navMenu}>
          <h5 className={style.navMenuTitle}>О компании</h5>
          <ul className={style.navMenuSub}>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Работа и карьера у нас</a>
            </li >
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Свяжитесь с нами</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Контакты</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Адреса магазинов</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Напишите нам</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Сотрудничество с нами</a>
            </li>
          </ul>
        </div>
        <div className={style.navMenu}>
          <h5 className={style.navMenuTitle}>Наши услуги</h5>
          <ul className={style.navMenuSub}>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Доставка и самовывоз</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Оплата и кредит</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Оплата частями</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Покупайте со Сбером</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Возврат и обмен</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Видеоконсультации</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Все услуги</a>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <h5 className={style.socialTitle}>Мы в социальных сетях</h5>
          <div className={style.socialIconBox}>
            <img width={28} height={28} src="/img/facebook.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/twitter.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/instagram.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/youtube.svg" alt="#" className={style.socialIcon}/>
          </div>
        </div>
      </footer>
    )
}

export default Footer