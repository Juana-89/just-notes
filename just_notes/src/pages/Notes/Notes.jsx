import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import { AddNotes } from '../../components/AddNotes/AddNotes'
import styles from './Notes.module.css';


export function Notes (props) {
    const [notes, setNotes] = useState([]);
    const [stateNote, setStateNote] = useState(false);
    const [error, setError] = useState('');
    const [searchNotes, setSearchNotes] = useState([]);

    let userId = props.currentUser;
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
       
        <AddNotes 
          notes={notes} 
          setNotes={setNotes} 
          setStateNote={setStateNote} 
          setSearchNotes={setSearchNotes}
        />
    </div>
    </div>
    
    )
}