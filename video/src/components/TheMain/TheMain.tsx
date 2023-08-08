import MainImage from '../MainImage/MainImage'
import Menu from '../Menu/Menu'
import styles from './TheMain.module.sass'

export function TheMain() {
    return (
        <section className={styles.main}>
            <div className={styles.mainContainer}>
                <MainImage title='Professional Videos' colorTitle={'#000'} image={'/main/mainOne.jpg'} />
                <Menu title='КРАСИВЫЕ ВИДЕО' />
            </div>
        </section>
    )
}