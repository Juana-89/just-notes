import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import {FaRegTrashAlt } from 'react-icons/fa';
import styles from './SavedNotes.module.css';

export function SavedNotes (props) {
    return (
        <article className={styles.container}>
            <div className={styles.footerNotes}>
                <span className={styles.spanIcos}>
                <FaEdit title='Editar nota'/>
                <FaRegTrashAlt title='Eliminar nota' />
                </span>
            </div>
        </article>
            )
}