import React from 'react';
import styles from '../assets/css/Footer.module.css';
import * as FaIcons from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.fot}>
            <div className={styles.content}>
                <p>️Copyright <FaIcons.FaRegCopyright size={14} /> 2018. Tribunews</p>
            </div>
        </div>
    )
}

export default Footer
