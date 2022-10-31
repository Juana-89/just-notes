import { useRef } from 'react';
import { addNote } from '../../firebase/firestore';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './AddNotes.module.css';

export function AddNotes (props) {
    const noteRef = useRef(null);

    const saveFunction = (e) => {
        e.preventDefault();
        const note = {
        description: noteRef.current.value, 
        state: true, 
        date: new Date().toLocaleDateString()
        }

        if(note.description === ''){
        alert('Recuerda que debes agregar información en este campo para guardarlo');
        }
        addNote(note)

        .then((response) => {
            note.id=response.id
            const newNotes = [...props.notes, note]
            props.setNotes(newNotes)
            props.setSearchNotes(newNotes)
            props.setStateNote(false)
            alert('Guardado exitosamente')
        })
        .catch((error) => 
            alert(error.message));   
    }

    const deleteFunction = (e) => {
            e.preventDefault()
            noteRef.current.value= '';
    };

    return(
        <form className={styles.form} onSubmit={saveFunction}>
        <textarea id='description' ref={noteRef} className={styles.note}
        name='description' placeholder='Puedes escribir tu nota aquí' ></textarea>
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
    )
}