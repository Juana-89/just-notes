import { useState, useRef, useEffect } from 'react';
import { updateNote } from '../../firebase/firestore'
import { addNote } from '../../firebase/firestore';
import ButtonsSaveAndDelete from '../../components/ButtonSaveDelete/SaveDelete';
import styles from './AddNotes.module.css';

export function AddNotes (props) {
    const noteRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Update the info in the textarea
        if (props.editingNote) {
          noteRef.current.value = props.editingNote.description || '';
          setIsEditing(true);
        } else {
          noteRef.current.value = '';
          setIsEditing(false);
        }
      }, [props.editingNote]);

    const saveFunction = async (e) => {
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
                if (isEditing) {
                    // This part is for edit the note, prop from Notes.jsx
                    await updateNote(props.editingNote.id, { description: noteDescription });
                    const updatedNotes = props.notes.map((note) =>
                    note.id === props.editingNote.id ? { ...note, description: noteDescription} : note
                  );
                    props.setNotes(updatedNotes);
                    props.setMessage('Editado exitosamente')
                    
                  } else {
                const response = await addNote(note);
                const newNotes = [...props.notes, response];
                props.setNotes(newNotes);
                props.setSearchNotes(newNotes);
                props.setStateNote(false);
                props.setSuccessSaved('Guardado exitosamente');
                console.log('Guardando nota...');
                
            } 
            noteRef.current.value = '';
        }catch (error) {
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
        text={isEditing ? 'Editar' : 'Guardar'}
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