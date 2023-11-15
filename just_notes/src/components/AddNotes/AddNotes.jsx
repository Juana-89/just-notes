import { useState, useRef } from 'react';
import { addNote } from '../../firebase/firestore';
import { Popup } from '../../components/Popup/Popup';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './AddNotes.module.css';

export function AddNotes (props) {
    const noteRef = useRef(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [successSaved, setSuccessSaved] = useState('');

    const saveFunction = (e) => {
        e.preventDefault();
        const noteDescription = noteRef.current.value;
      

        if(noteDescription === ''){
        setMessage('Recuerda que debes agregar información en este campo para guardarlo');
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
                setSuccessSaved('Guardado exitosamente');
                console.log('Guardando nota...');
                noteRef.current.value = '';
            } catch (error) {
                console.log('Error al guardar nota...');
                setError('Error al guardar la nota. Por favor, intenta nuevamente.');
            }   
    }
    }
    const deleteFunction = (e) => {
            e.preventDefault()
            noteRef.current.value= '';
    };

    const handleClosePopup = () => {
        setMessage('');
        setError('');
        setSuccessSaved('');
      };

    return(      
        <>
        <div className={styles.popupContainer}>
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
        </div>
        {error && <Popup content={error} onClose={handleClosePopup}></Popup>}
        {message && <Popup content={message} onClose={handleClosePopup}></Popup>}
        {successSaved && <Popup content={successSaved} onClose={handleClosePopup}></Popup>}
        </>
               
    )
}