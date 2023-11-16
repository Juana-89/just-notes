import { useState, useRef } from 'react';
import { addNote } from '../../firebase/firestore';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './AddNotes.module.css';

export function AddNotes (props) {
    const noteRef = useRef(null);

    const saveFunction = (e) => {
        e.preventDefault();
        const noteDescription = noteRef.current.value;

        if(noteDescription === ''){
        props.setMessage('Recuerda que debes agregar información en este campo para guardarlo');
        }else {
            const note = {
                description: noteDescription, 
                state: true, 
                date: new Date()
            };

            try {
                const response = addNote(note);
                note.id = response.id;
                const newNotes = [...props.notes, note];
                props.setNotes(newNotes);
                props.setSearchNotes(newNotes);
                props.setStateNote(false);
                props.setSuccessSaved('Guardado exitosamente');
                console.log('Guardando nota...');
                noteRef.current.value = '';
            } catch (error) {
                console.log('Error al guardar nota...');
                props.setError('Error al guardar la nota. Por favor, intenta nuevamente.');
            }   
    }
    }
    const deleteFunction = (e) => {
            e.preventDefault()
            noteRef.current.value= '';
    };

    const { messageProp } = props;
    console.log(messageProp); 

    return(      
        <>
        <form className={styles.form} onSubmit={saveFunction}>
        <textarea id='description' ref={noteRef} className={styles.note}
        name='description' placeholder='Puedes escribir tu nota aquí' ></textarea>
        <div className={styles.buttons}>
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
        </div>
        </form>
        </>  
    )
}