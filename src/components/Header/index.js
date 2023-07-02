import style from './Header.module.scss'

function Header() {
    return (
      <header className={style.header}>
        <a className={style.headerLogo} href="/">IKEA</a>
        <input type="text" className={style.headerTextplace} placeholder="Поиск"></input>
        <div className={style.headerCategories}>
          <p className={style.categoriesItem}>Коллекции</p>
          <p className={style.categoriesItem}>Мебель</p>
          <p className={style.categoriesItem}>Освещение</p>
          <p className={style.categoriesItem}>Аксуссуары</p>
          <p className={style.categoriesItem}>Доставка</p>
        </div>
        <div className="d-flex align-center">
          <p className={style.headerTown}>Москва</p>
          <img width={24} height={24} src="/img/user.svg" alt="#" className={style.headerIcon}/>
          <img width={24} height={24} src="/img/heart.svg" alt="#" className={style.headerIcon}/>
          <img width={24} height={24} src="/img/cart.svg" alt="#" className={style.headerIcon}/>
        </div>
      </header> 
    )
}

export default Header