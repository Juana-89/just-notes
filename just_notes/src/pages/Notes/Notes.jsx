import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './Notes.module.css';

export function Notes () {
    const saveFunction = (e) => {
        e.preventDefault();
        alert('Dar comida a los gatos')
    }
    const deleteFunction = (e) => {
        e.preventDefault();
        alert('Dar comida a los gatos1')
    }

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
        <p className={styles.title}>Agregar nota:</p>
        <form className={styles.form}>
            <textarea className={styles.note}></textarea>
            <ButtonsSaveAndDelete
            text='Guardar'
            classBtn={true}
            click={saveFunction}>
            </ButtonsSaveAndDelete>

            <ButtonsSaveAndDelete
            text='Borrar'
            classBtn={false}
            click={deleteFunction}>
            </ButtonsSaveAndDelete>
            </form>
    </div>
   
    </div>
    
    )
}