import Card from '../components/Card';
import arr from '../data/cardsData'


function Home() {

    return (
        <div className="content">
            <div className="headBlock">
              <h1 className="headText">Хиты продаж</h1>
            </div>
            <div className="cardBox">
              {arr.map((obj, index) => (
                <Card id={obj.id} key={index} imgUrl={obj.imgUrl} title={obj.title} price={obj.price}/>
              ))}
            </div>
        </div>
    )
}

export default Home;