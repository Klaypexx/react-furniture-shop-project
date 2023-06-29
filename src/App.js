function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-center header">
        <a className="headerLogo" href="/">IKEA</a>
        <input type="text" className="headerTextplace" placeholder="Поиск"></input>
        <div className="headerCategories d-flex">
          <p class="categoriesItem">Коллекции</p>
          <p class="categoriesItem">Мебель</p>
          <p class="categoriesItem">Освещение</p>
          <p class="categoriesItem">Аксуссуары</p>
          <p class="categoriesItem">Доставка</p>
        </div>
        <div className="headerRight d-flex align-center">
          <p className="headerTown">Москва</p>
          <img width={24} height={24} src="/img/user.svg" alt="#" className="headerIcon"/>
          <img width={24} height={24} src="/img/heart.svg" alt="#" className="headerIcon"/>
          <img width={24} height={24} src="/img/cart.svg" alt="#" className="headerIcon"/>
        </div>
      </header>

      <section className="preview">
        <div className="preview d-flex">
          <div className="leftPreviewSide">
            <img src="/img/room.jpg" alt="#" className="previewPhoto"></img>
          </div>
          <div className="rightPreviewSide d-flex align-center">
            <div className="previewBlock">
              <h2 className="previewHeading">Новая коллекция</h2>
              <p className="previewText">Наши новые поставки мебели в <br/>скандинавском стиле приятно вас удивят</p>
              <button className="previewButton">Смотреть</button>
            </div>
          </div>
        </div>
      </section>


      <div className="content d-flex flex-column">
        <div className="headBlock">
          <h1 className="headText">Хиты продаж</h1>
        </div>

        <div className="cardBox">

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>

          <div className="card">
            <div class="cardPreview">
              <a href="/" className="cardPreviewImage">
                <img width={315} height={184} src="/img/card1.jpg" alt="#"></img>
              </a>
              
            </div>  
            <div className="cardText d-flex flex-column ">
              <a href="/" className="cardHeading">Кресло Барселона</a>
              <a href="/" className="cardCash">$6738</a>
            </div>
            <div class="d-flex pb-20">
              <button className="cardButton">В корзину</button>
              <img width={32} height={32} src="/img/heart.svg" alt="#" className="cardHeart"/>
            </div>
          </div>
        

        </div>

        

      </div>
      <div className="comm d-flex align-center">
        <div className="commTextBox">
          <p>Подпишись на нашу новостную <br/> рассылку и получите скидку 10% на <br/> первую покупку!</p>
        </div>
        <input type="text" className="commMail" placeholder="Введите ваш e-mail"></input>
        <button className="commButton">Подписаться</button>
      </div>
      

      <footer className="footer d-flex">
        <div className="navMenu">
          <h5 className="navMenuTitle">О компании</h5>
          <ul className="navMenuSub">
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Работа и карьера у нас</a>
            </li >
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Свяжитесь с нами</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Контакты</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Адреса магазинов</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Напишите нам</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Сотрудничество с нами</a>
            </li>
          </ul>
        </div>

        <div className="navMenu">
          <h5 className="navMenuTitle">Наши услуги</h5>
          <ul className="navMenuSub">
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Доставка и самовывоз</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Оплата и кредит</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Оплата частями</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Покупайте со Сбером</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Возврат и обмен</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Видеоконсультации</a>
            </li>
            <li className="navMenuLink">
              <a href="/" className="navMenuItem">Все услуги</a>
            </li>
          </ul>
        </div>

        <div className="social">
          <h5 className="socialTitle">Мы в социальных сетях</h5>
          <div className="socialIconBox">
            <img width={28} height={28} src="/img/facebook.svg" alt="#" className="socialIcon "/>
            <img width={28} height={28} src="/img/twitter.svg" alt="#" className="socialIcon"/>
            <img width={28} height={28} src="/img/instagram.svg" alt="#" className="socialIcon"/>
            <img width={28} height={28} src="/img/youtube.svg" alt="#" className="socialIcon"/>
          </div>
        </div>
      <div>

      </div>
      </footer>
    </div>
  );
}

export default App;
