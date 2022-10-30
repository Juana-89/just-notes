import { useState, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './Notes.module.css';


export function Notes () {
    const inputRef = useRef(null);

    const saveFunction = (e) => {
        e.preventDefault();
        alert('Dar comida a los gatos');
    }


    const deleteFunction = (e) => {
        e.preventDefault();
        inputRef.current.value= ''
       
    };

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
            <textarea ref={inputRef} className={styles.note}
            name='note' ></textarea>
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