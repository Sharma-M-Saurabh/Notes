import React, { useState,useEffect } from 'react'
import NotesList from './Components/NoteList'
import {nanoid} from 'nanoid'
import Search from './Components/Searchbar'
import Header from './Components/Header'
import { Typography } from '@mui/material';
import { Container } from '@mui/system';




function App() {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date:"03/11/2021"
  },
]);

  const [searchNote,setSearchNote] = useState('');
const [darkMode,setDarkMode] = useState(false)

useEffect(()=>{
  localStorage.setItem('react-notes app data' , JSON.stringify(notes))


},[notes])

const addnote = (text)=>{
  const date = new Date();
  const newNote ={
    id : nanoid(),
    text : text,
    date : date.toLocaleDateString()
  }
  const NewNotes = [...notes , newNote]
  setNotes(NewNotes);
}
const deletingNote = (id) =>{
  const newNotes = notes.filter((note)=> note.id!==id);
  setNotes(newNotes)
 }
 

  return (
    <>
     <Typography component='div'className={`${darkMode && 'dark-mode'}`}>
      
      <Container>
        <Header   handletoggleButton={setDarkMode}/>
        <Search  handleSearch={setSearchNote}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addnote} handleDelete={deletingNote}/>

      </Container>


     </Typography>
     
    </>
  );
}

export default App;
