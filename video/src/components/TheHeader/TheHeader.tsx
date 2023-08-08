'use client'

import Image from 'next/image'
import styles from './TheHeader.module.sass'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useState } from 'react'


export function TheHeader() {
    const resize768 = useMediaQuery(768);
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href='/' className={styles.headerContainerLogo}>
                    <Image

                        width={500}
                        height={500}
                        quality={100}
                        priority
                        src='/icons/logoSvg.svg'
                        alt=''
                    />
                </Link>
                {resize768 && <div className={styles.headerContainerBurger} onClick={()=>setMenuStatus(!menuStatus)}>
                    <svg className={styles.headerContainerBurgerSvg} width="25" height="18" viewBox="0 0 100 100">
                        <path className={menuStatus ? styles.headerContainerBurgerSvgline1opene : styles.headerContainerBurgerSvgline1}
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className={menuStatus ? styles.headerContainerBurgerSvgline2opene : styles.headerContainerBurgerSvgline2} d="M 20,50 H 80" />
                        <path className={menuStatus ? styles.headerContainerBurgerSvgline3opene : styles.headerContainerBurgerSvgline3}
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </div>}
            </div>

        </header>
    )
}