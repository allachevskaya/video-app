import Image from 'next/image';
import styles from './Price.module.sass';
import { v4 as uuidv4 } from 'uuid';
type arrayListType = {
    icon: string,
    title: string,
    description: string;
}


export function Price() {

    const arrayList: arrayListType[] = [
        {
            title: 'Будем на съемках вовремя',
            description: 'Мы знаем как это важно для вас, поэтому будем на месте съемок заранее, подготовленные и со всем оборудованием',
            icon: '/icons/icon _clock_.png',
        },
        {
            title: 'Возьмем с собой запасное оборудование',
            description: 'Самая частая причина срыва съемок - это неисправность оборудования. Мы возьмем с собой запасную камеру, горсть флешек и заряженных аккумуляторов, чтобы быть уверенными, что все пройдет хорошо.',
            icon: '/icons/icon _battery empty_.png',
        },
        {
            title: 'Заранее осмотрим место съемки и все продумаем ',
            description: 'Мы заранее осмотрим локацию и продумаем план съемок, а в назначенный день будем работать с учетом особенностей освещения, ландшафта и количеством участников.',
            icon: '/icons/icon _eye_.png',
        },
        {
            title: 'Договор',
            description: 'Мы заключаем договор на все работы, это обеспечивает надежную защиту ваших интересов и гарантирует, что мы будем работать с вами в открытой и честной манере',
            icon: '/icons/icon _pencil_.png',
        },
    ];

    return (
        <section className={styles.price}>
            <div className={styles.priceContainer}>
                <div className={styles.priceContainerLists}>
                    {arrayList.map((item) =>
                        <div key={uuidv4()} className={styles.priceContainerListsList}>
                            <div className={styles.priceContainerListsListIcon}>
                                <Image
                                    width={40}
                                    height={40}
                                    src={item.icon}
                                    alt={item.title}
                                />
                            </div>
                            <div className={styles.priceContainerListsListText}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.priceContainerPrice}>
                    <div className={styles.priceContainerPriceTitle}>Price</div>
                    <div className={styles.priceContainerPriceImg}>
                        <Image
                            width={800}
                            height={800}
                            src='/images/Screenshot_2.png'
                            alt=''
                        />
                    </div>
                    <div className={styles.priceContainerPriceText}>
                        <h2>Стоимость</h2>
                        <p>Для того чтобы узнать стоимость, просто позвоните или напиши нам.</p>
                        <p> Рассчет
                            предоставим
                            в течении <span>30 мин</span></p>
                        <a href="#" className={styles.priceContainerPriceTextBtn}>
                            +7 (915) 648-03-29
                        </a>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}