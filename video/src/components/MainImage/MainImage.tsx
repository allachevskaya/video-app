import Image from 'next/image'
import styles from './MainImage.module.sass'


interface mainImgProps {
    title: string;
    colorTitle: string;
    image: string
}

const MainImage: React.FC<mainImgProps> = ({ title, colorTitle,image }) => {
    return (
        <div className={styles.images}>
            <div className={styles.imagesImg}>
                <Image
                    width={1000}
                    height={1000}
                    src= {image}
                    alt=''
                    priority
                    quality={100}
                />
            </div>
            <div className={styles.imagesTitle}>
                <h2 style={{ color: `${colorTitle}` }}>{title}</h2>
            </div>
        </div>
    )
}

export default MainImage