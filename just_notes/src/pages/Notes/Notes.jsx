import { useState } from 'react';
import { updateNote } from '../../firebase/firestore'
import { Header } from '../../components/Header/Header';
import { ButtonLogOut } from '../../components/ButtonLogOut/LogOut';
import { AddNotes } from '../../components/AddNotes/AddNotes';
import { Popup } from '../../components/Popup/Popup';
import { ViewNotes } from '../../components/ViewNotes/ViewNotes';
import styles from './Notes.module.css';


export function Notes () {
    const [notes, setNotes] = useState([]);
    const [stateNote, setStateNote] = useState(false);
    const [error, setError] = useState('');
    const [searchNotes, setSearchNotes] = useState([]);
    const [message, setMessage] = useState('');
    const [successSaved, setSuccessSaved] = useState('');
    const [successDeleted, setSuccessDeleted] = useState('');
    const [editingNote, setEditingNote] = useState(null);

    const handleClosePopup = () => {
      setMessage('');
      setError('');
      setSuccessSaved('');
      setSuccessDeleted('');
      setEditingNote(null);
    };

    return (
    <>
    <main className={styles.container}>
    <div className={styles.containerElements}>
        <div className={styles.header}>
        <Header />
        <div className={styles.logout}>
        user:JM &nbsp; 
        <ButtonLogOut text='Cerrar sesión' />
        </div>
        </div>
        <p className={styles.title}>Agregar nota:</p>
        <AddNotes 
          notes={notes}
          setNotes={setNotes}
          setStateNote={setStateNote}
          setSearchNotes={setSearchNotes}
          setError={setError}
          setMessage={setMessage}
          setSuccessSaved={setSuccessSaved}
          editingNote={editingNote}
          messageProp="Probando clic del botón"
        />
       <p className={styles.title}>Notas guardadas:</p>
       <div className={styles.viewNotes}>
       <ViewNotes
          notes={notes}
          setSuccessDeleted={setSuccessDeleted}
          setEditingNote={setEditingNote}
          />
       </div>
    </div>
    </main>
    {error && <Popup content={error} onClose={handleClosePopup}></Popup>}
    {message && <Popup content={message} onClose={handleClosePopup}></Popup>}
    {successSaved && <Popup content={successSaved} onClose={handleClosePopup}></Popup>}
    {successDeleted && <Popup content={successDeleted} onClose={handleClosePopup}></Popup>}
    </>
    )
}