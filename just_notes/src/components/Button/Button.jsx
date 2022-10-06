import styles from './Button.module.css';

export function Button () {
    return (
        <div className={styles.divBtnLogin}>
        <button className={styles.btnLogin}>Ingresar</button>
        </div>
    )
}