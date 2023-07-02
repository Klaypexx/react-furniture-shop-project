import style from './Preview.module.scss'

function Preview() {
    return (
      <section className={style.preview}>
        <div className={style.leftPreviewSide}>
          <img src="/img/room.jpg" alt="#" className={style.previewPhoto}></img>
        </div>
        <div className={style.rightPreviewSide}>
          <div className={style.previewBlock}>
            <h2 className={style.previewHeading}>Новая коллекция</h2>
            <p className={style.previewText}>Наши новые поставки мебели в <br/>скандинавском стиле приятно вас удивят</p>
            <button className={style.previewButton}>Смотреть</button>
          </div>
        </div>
      </section>

    )
}

export default Preview