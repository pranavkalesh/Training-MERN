import React, { Component } from 'react';
import Logo from 'react'
import menu  from './menu'
import Styles from "./navbar.module.css"

const Navbar = ()=>{
    return(
        <section id={Styles.navBlock}>
            <article>
            <Logo/>
            <menu/>
        </article>
        </section>
        
    )
}

export default Navbar;
