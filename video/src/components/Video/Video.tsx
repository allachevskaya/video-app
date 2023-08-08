import Image from 'next/image';
import styles from './Video.module.sass'

interface VideoProps {
    background: string,
    color: string,
    text: string;

}

const Video: React.FC<VideoProps> = ({ background, color, text }) => {
    return (
        <section style={{ background: `${background}` }} className={styles.video}>
            <div className={styles.videoContainer}>
                <div className={styles.videoContainerTitle}>
                    <h2 style={{ color: `${color}` }}>Showreel</h2>
                    <p style={{ color: `${color}` }}>{text}</p>
                </div>
                <div className={styles.videoContainerContent}>
                    <div className={styles.videoContainerContentVideo}>
                        <div className={styles.videoContainerContentVideoImg}>
                            <Image
                                width={1000}
                                height={1000}
                                src='/images/videoBag.jpg'
                                alt=''
                            />
                            <div className={styles.videoContainerContentVideoImgText}>
                                <div className={styles.videoContainerContentVideoImgTextCircle}>
                                    <svg viewBox="0 0 70 70" width="50%">
                                        <defs>
                                            <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" fill="#fff" id="tophalf" />
                                        </defs>
                                        <text >
                                            <textPath fill="white" href="#tophalf" startOffset="1%" >Смотреть</textPath>
                                            <textPath fill="white" href="#tophalf" startOffset="34%">Смотреть</textPath>
                                            <textPath fill="white" href="#tophalf" startOffset="68%">Смотреть</textPath>
                                        </text>
                                    </svg>
                                    <div className={styles.videoContainerContentVideoImgTextCircleImg}
                                    >
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src='/icons/cursor.svg'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoContainerContentText}>
                        <h2 style={{ color: `${color}` }}>ЗАКАЗАТЬ ВИДЕО</h2>
                        <p style={{ color: `${color}` }}>Если тебе понравилось наше видео, оставляй заявку и наш менеджер проконсультирует тебя по всем интересующим вопросам, а так же поможет определиться с концепцией свадебного видео.
                        </p>
                        <div className={styles.videoContainerContentTextBtn}>
                        Заявка на видео
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Video