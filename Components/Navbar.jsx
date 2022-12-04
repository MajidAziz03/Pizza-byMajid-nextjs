import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.telephone}>
                    <Image src='/img/telephone.png' width={'32'} height={'32'} /> 
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>021-111-111</div>
                </div>
            </div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    )
}

export default Navbar