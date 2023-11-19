import { useState, useEffect } from 'react';
import { updateNote, deleteNote } from '../../firebase/firestore'
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './ViewNotes.module.css';

export function ViewNotes (props) {
    const [localNotes, setLocalNotes] = useState([]);

    useEffect(() => {
        setLocalNotes(props.notes);
    }, [props.notes]);

    const handleEditNote = () => {
        console.log("hola")
    }

    const handleDeletedNote = async(id) => {

        try {
           props.setSuccessDeleted("Nota fue eliminada")
            deleteNote(id)
            setLocalNotes(localNotes.filter(note => note.id !== id));
        } catch (error) {
            alert(error)    
        }
    }

    return (
        <section className={styles.sectionNotes}>
        {localNotes.map((note) => {
        return(
            <article className={styles.container} key={note.id}>
                <p className={styles.pharagraph}>{note.description}</p>  
                <div className={styles.footerNotes}>
                    <span className={styles.spanIcos}>
                        <FaEdit title='Editar nota'onClick={handleEditNote}/>
                        <FaRegTrashAlt title='Eliminar nota' onClick={()=>handleDeletedNote(note.id)}/>
                    </span>
                </div>
            </article>
)})}
     </section>
    )
}