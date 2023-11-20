import { db } from './config';
import { addDoc, collection, doc, getDoc, getDocs,
    query, where,  deleteDoc, updateDoc } from 'firebase/firestore';

export const addNote = async (note) => {
    const docRef = await addDoc(collection(db, 'notes'),{...note});
    //recovering the note id
    return { id: docRef.id, ...note };
};

export const queryGetNotesByIdUser = (autorId, state) => 
query(collection(db, 'notes'), where('autorId', '===', autorId), 
where('state', '===', state));

export const getNote = (id) => getDoc(doc(db, 'notes', id));
export const getNotesByIdUser =  (autorId, state) => 
getDocs(queryGetNotesByIdUser(autorId, state));

export const deleteNote = (id) => deleteDoc(doc(db, 'notes', id));

// export const updateStateNote = (idNote, state) => 
// updateDoc(doc(db, 'notes', idNote), {state:state});

export const updateNote = (id, note) => 
updateDoc(doc(db, 'notes', id), {description:note.description});