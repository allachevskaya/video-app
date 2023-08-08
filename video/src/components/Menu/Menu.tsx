import Image from 'next/image'
import styles from './Menu.module.sass'


interface menuProps {
    title: string
}

const Menu: React.FC<menuProps> = ({ title }) => {
    return (
        <div className={styles.menu}>

            <div className={styles.menuContacts}>
                <div className={styles.menuContactsTitle}>
                    Меню
                </div>
                <nav className={styles.menuNav}>
                    <ul>
                        <li><a href="#">Видеосъемка детского утренника</a></li>
                        <li><a href="#">Свадебная видеосъемка</a></li>
                        <li><a href="#">Видеосъемка для бизнеса</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </nav>


            </div>

            <div className={styles.menuContacts}>
                <div className={styles.menuContactsTitle}>
                    Контакты
                </div>
                <nav className={styles.menuNav}>
                    <ul>
                        <li>
                            <Image
                                width={20}
                                height={20}
                                src='/icons/phone.svg'
                                alt=''
                            />
                            <a href="#">+7 (915) 648-03-29</a>
                        </li>
                        <li>
                            <Image
                                width={20}
                                height={20}
                                src='/icons/teleg.svg'
                                alt=''
                            />
                            <a href="#">@taketape</a>
                        </li>
                        <li>
                            <Image
                                width={20}
                                height={20}
                                src='/icons/whats.svg'
                                alt=''
                            />
                            <a href="#">+7 (915) 648-03-29</a>
                        </li>
                        <li>
                            <Image
                                width={20}
                                height={20}
                                src='/icons/ness.svg'
                                alt=''
                            />
                            <a href="#">offer@taketape.ru</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className={styles.menuTitle}>
                <h1>
                    Снимаем и монтируем
                    <span>{title}</span>
                </h1>
            </div>
        </div>
    )
}

export default Menu