import React from 'react';
import Styles from './navbar.modules.css'
const menu = ()=>{
    return(
        <div className={Styles.menublock}>
            <ul>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Classroom</a></li>
                <li><a href="">Assessments</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Calender</a></li>
                <li><a href="">News</a></li>
                <li><a href="">blog</a></li>
            </ul>
        </div>
    )
}

export default menu;