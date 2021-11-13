import React from 'react';
import styles from '../assets/css/Body.module.css';
import skin from '../assets/img/skin.png';
import billboard from '../assets/img/billboard1.png';
import pic1 from '../assets/img/pic1.png';
import pic2 from '../assets/img/2021-11-13 08.11.01.png';
import pic3 from '../assets/img/2021-11-13 08.12.29.png';
import pic4 from '../assets/img/2021-11-13 08.13.25.png';
import pic5 from '../assets/img/2021-11-13 08.14.33.png';
import pic6 from '../assets/img/2021-11-13 08.16.04.png';
import pic7 from '../assets/img/2021-11-13 08.25.18.png';
import pic8 from '../assets/img/2021-11-13 08.33.38.png';
import pic9 from '../assets/img/2021-11-13 08.36.27.png';
import pic10 from '../assets/img/2021-11-13 08.37.07.png';
import pic11 from '../assets/img/2021-11-13 08.39.36.png';
import pic12 from '../assets/img/2021-11-13 08.40.08.png';
import * as AiIcons from "react-icons/ai";

function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <img src={skin} alt="" className={styles.skin}/>
                <img src={billboard} alt="" className={styles.billboard}/>
                <img src={skin} alt="" className={styles.skin}/>
            </div>
            <div className={styles.content}>
                <div className={styles.row1}>
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                </div>
                <div className={styles.row2}>
                    <img src={pic3} alt="" />
                    <img src={pic4} alt="" />
                    <img src={pic5} alt="" />
                </div>
                <div className={styles.row1}>
                    <img src={pic6} alt="" />
                    <img src={pic7} alt="" />
                </div>
                <div className={styles.row2}>
                    <img src={pic8} alt="" />
                    <img src={pic9} alt="" />
                    <img src={pic10} alt="" />
                </div>
                <div className={styles.row1}>
                    <img src={pic11} alt="" />
                    <img src={pic12} alt="" />
                </div>
                <div className={styles.navigator}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p><AiIcons.AiOutlineArrowRight /></p>
                </div>
            </div>
        </div>
    )
}

export default Body
