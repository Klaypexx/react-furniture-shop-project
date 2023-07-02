import style from './Comm.module.scss'

function Comm() {
    return (
      <div className={style.comm}>
        <div className={style.commTextBox}>
          <p>Подпишись на нашу новостную <br/> рассылку и получите скидку 10% на <br/> первую покупку!</p>
        </div>
        <input type="text" className={style.commMail} placeholder="Введите ваш e-mail"></input>
        <button className={style.commButton}>Подписаться</button>
      </div>
    )
}

export default Comm