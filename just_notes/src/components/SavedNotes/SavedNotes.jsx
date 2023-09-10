import { useState, useEffect } from 'react';

import { updateNote } from '../../firebase/firestore'
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './SavedNotes.module.css';
export function SavedNotes (props) {
    const deleteNotes = (id) => {
        const dialog = window.confirm('¿Quieres eliminar esta nota?')
        if(dialog){
            updateNote(id, false).then(() => {
                const newNotes=[...props.notes].filter((note) => note.id !== id)
                props.setNotes(newNotes)
                props.setSearchNotes(newNotes)
                props.setStateNote(true)
            }).catch((error) => {
                alert(error.message)
            })
        }

    }

    // props.notes.map((note) => {
    // return (
        
    //     <article className={styles.container}  key={note.id}>
    //         <div className={styles.footerNotes} >{note.description}
    //             <span className={styles.spanIcos}>
    //             <FaEdit title='Editar nota' onClick={deleteNotes}/>
    //             <FaRegTrashAlt title='Eliminar nota' />
    //             </span>
    //         </div>
    //     </article>
    // )
    //     }
    //     )

}