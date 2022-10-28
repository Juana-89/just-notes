import { Header } from '../../components/Header/Header';
import { ButtonsLogOutSaveDelete } from '../../components/ButtonLogOut/LogOutSaveDelete';
import styles from './Notes.module.css';

export function Notes () {
    return (
    <div className={styles.container}>
    <div className={styles.containerElements}>
    <Header />
    <ButtonsLogOutSaveDelete text='Cerrar sesión'></ButtonsLogOutSaveDelete>
    </div>
    </div>
    )
}