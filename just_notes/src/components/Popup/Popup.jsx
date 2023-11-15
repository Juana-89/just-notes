import { useState } from 'react';
import styles from './Popup.module.css';

export function Popup ({content, onClose }) {
    const [popupOpen, setPopupOpen] = useState(true)
    const handleClose = () => {
        setPopupOpen(false)
        onClose && onClose();
    }
    return popupOpen ? (
        <div className={styles.overlay} onClick={handleClose}>
        <div className={styles.modalContainer} >
        <span className={styles.spanTitle}>
        <p>Información</p></span>
        <button className={styles.closeModal}
        onClick={handleClose}>x</button>
        <div className={styles.content}>
        {content}
        <button className={styles.accept} onClick={handleClose}>
        Aceptar</button>
        </div>
        </div>
        </div>
    ): null
}