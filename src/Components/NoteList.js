import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
import { Typography } from '@mui/material'

const NoteList = ({notes,handleAddNote,handleDelete}) => {
  return (
    <>
    <Typography component='div' sx={{display : 'grid', gridTemplateColumns : 'repeat(auto-fit,minmax(250px,1fr))'}}>
        {notes.map((note)=>
            <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete}/>
        )}

        <AddNote handleAddNote={handleAddNote}/>

    </Typography>

      
    </>
  )
}

export default NoteList
