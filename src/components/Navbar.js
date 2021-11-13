import React from 'react';
import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/img/Tribunnews_com (1).png';
import wadidaw from '../assets/img/2021-11-13 12.10.45.png';
import * as FaIcons from "react-icons/fa";

function Navbar() {
    return (
        <div>
            <div className={styles.navLogo}>
                <img src={logo} alt="" className={styles.logo}/>
            </div>
            <div className={styles.nav}>
                <div className={styles.content}>
                    <img src={wadidaw} alt="" className={styles.wadidaw} />
                    <div className={styles.barSearch}>
                        <input type="text" placeholder="Search..." size="15"/>
                        <FaIcons.FaSearch size={14} className={styles.icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
