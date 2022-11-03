import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import { AddNotes } from '../../components/AddNotes/AddNotes';
import { SavedNotes } from '../../components/SavedNotes/SavedNotes';
import styles from './Notes.module.css';


export function Notes (props) {
    const [notes, setNotes] = useState([]);
    const [stateNote, setStateNote] = useState(false);
    const [error, setError] = useState('');
    const [searchNotes, setSearchNotes] = useState([]);

    let userId = props.currentUser;
    return (
    <main className={styles.container}>
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
       <p className={styles.title}>Notas guardadas:</p>
       <div className={styles.viewNotes}>
       <SavedNotes/>
       </div>
    </div>
    </main>
    
    )
}