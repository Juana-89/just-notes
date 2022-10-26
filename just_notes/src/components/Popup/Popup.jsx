import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Popup.module.css';


export function Popup ({content}) {
    const [popupOpen, setPopupOpen] = useState(true)
    const handleClose = () => {
        setPopupOpen(!popupOpen)
    }
    return popupOpen ? (
        // <div className={styles.overlay} onClick={handleClose}>
        <>
            <div className={styles.modalContainer} >
                <span className={styles.spanTitle}>
                    <p>Información</p></span>
        <button className={styles.closeModal}
        onClick={handleClose}>x</button>
        </div>
        <div className={styles.content}>
            {content}
        </div>
        </>
        // </div>
      
    ): null
}