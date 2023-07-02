import Card from '../Card';
import style from './Content.module.scss'


const arr = [
    { title: 'Кресло Барселона', price: '$6738', imgUrl: '/img/cards/card1.jpg'},
    { title: 'Стул Медисон', price: '$4500', imgUrl: '/img/cards/card2.jpg'},
    { title: 'Стул Венеция', price: '$3800', imgUrl: '/img/cards/card3.jpg'},
    { title: 'Стол Валенсия', price: '$4679', imgUrl: '/img/cards/card4.jpg'},
    { title: 'Стол Берлин', price: '$5790', imgUrl: '/img/cards/card5.jpg'},
    { title: 'Кресло Римини', price: '$7190', imgUrl: '/img/cards/card6.jpg'}
  ];

function Content() {
    return (
        <div className={style.content}>
            <div className={style.headBlock}>
              <h1 className={style.headText}>Хиты продаж</h1>
            </div>
            <div className={style.cardBox}>
              {arr.map((obj, index) => (
                <Card key={index} imgUrl={obj.imgUrl} title={obj.title} price={obj.price}/>
              ))}
            </div>
        </div>
    )
}

export default Content