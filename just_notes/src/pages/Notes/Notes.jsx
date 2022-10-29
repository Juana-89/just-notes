import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import styles from './Notes.module.css';

export function Notes () {
    return (
    <div className={styles.container}>
    <div className={styles.containerElements}>
        <div className={styles.header}>
        <Header />
        <div className={styles.logout}>
        user:Juana &nbsp; 
        <ButtonLogOut text='Cerrar sesión' />
        </div>
        </div>
        {/* <p className={styles.title}>Agregar nota:</p>
        <form className={styles.form}>
            <textarea className={styles.note}></textarea>
            </form> */}
    </div>
    </div>
    )
}