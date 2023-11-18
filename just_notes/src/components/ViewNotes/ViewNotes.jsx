import { useState, useEffect } from 'react';
import { updateNote } from '../../firebase/firestore'
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './ViewNotes.module.css';

export function ViewNotes (props) {
    const [localNotes, setLocalNotes] = useState([]);

    useEffect(() => {
        setLocalNotes(props.notes);
    }, [props.notes]);


    console.log(props.notes);
    const handleEditNote = () => {
        console.log("hola")
    }

    const handleDeletedNote = () => {
        console.log("hola")
    }

    return (
        <section className={styles.sectionNotes}>
        {localNotes.map((note) => (
        <article className={styles.container} key={note.id}>
        <p className={styles.pharagraph}>{note.description}</p>  
        <div className={styles.footerNotes}>
            <span className={styles.spanIcos}>
            <FaEdit title='Editar nota'onClick={handleEditNote}/>
            <FaRegTrashAlt title='Eliminar nota' onClick={handleDeletedNote}/>
            </span>
        </div>
        </article>
        ))}
     </section>
    )
}