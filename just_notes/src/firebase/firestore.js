import { db } from './config';
import { addDoc, collection, doc, getDoc, getDocs,
    query, where,  deleteDoc, updateDoc } from 'firebase/firestore';

export const addNote = async (note) => 
     await addDoc(collection(db, 'notes'),{... note});

const queryGetNotesByIdUser = (userId, state) => 
query(collection(db, 'notes'), where('userId', '===', userId), 
where('state', '===', state));

export const getNote = (id) => getDoc(doc(db, 'notes', id));
export const getNotesByIdUser =  (userId, state) => 
getDocs(queryGetNotesByIdUser(userId, state));

export const deleteNote = (id) => deleteDoc(doc(db, 'notes', id));
export const updateStateNote = (idNote, state) => 
updateDoc(doc(db, 'notes', idNote), {state:state});

export const updateNote = (noteId, note) => 
updateDoc(doc(db, 'notes', noteId), {description:note.description});