import React from 'react'
import styles from './Header.module.css'


function Header(props) {

    return (
        <header className={styles.header}>
            <h1 style={{fontSize: "4rem"}}>CV APP</h1>
            <button onClick={props.handlePrint}>Print CV</button>

        </header>
    )
}

export default Header
