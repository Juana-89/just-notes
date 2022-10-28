import styles from './Button.module.css';
//https://www-notimedad-dev.translate.goog/creating-reusable-react-buttons/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc
export function Button ({text, click}) {
    return (
        <div className={styles.divBtnLogin}>
        <button type='submit' className={styles.btnLogin} 
        onClick={click}>{text}</button>
        </div>
    )
}