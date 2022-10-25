import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Popup.module.css';


export function Popup ({close, content}) {
    const [popupOpen, setPopupOpen] = useState(true)
    const handleClose = () => {
        setPopupOpen(!popupOpen)
    }
    return popupOpen ? (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
        <button className={styles.closeModal}
        onClick={handleClose}>x</button>
        <div className={styles.content}>
            {content}
        </div>
        </div>
        </div>
    ): null
}