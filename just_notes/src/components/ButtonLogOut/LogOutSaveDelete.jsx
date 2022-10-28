import styles from './LogOutSaveDelete.module.css';
export function ButtonsLogOutSaveDelete ({text, click}) {
    return (
        <>
        <button className={styles.btn}
        onClick={click}>{text}</button>
        </>
    )
}