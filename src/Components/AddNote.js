import React, { useState } from 'react'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 300;

    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }

    }
    return (

        <Typography component='div' sx={{ backgroundColor: ' #C32146' , minHeight : '170px' , borderRadius : '10px',marginTop : '5%' }}>

            <Grid item sm={6}>
                <TextField
                    variant="standard"
                    fullWidth
                    multiline
                    label="Here you can write yours Notes"
                    InputProps={{
                        rows: 3,
                        border: 'none'
                    }}
                    value={noteText}
                    onChange={handleChange}


                />
                </Grid>


                <Typography component='div' sx={{ alignment: 'center', justifyContent: 'space-between', display: 'flex', color: '2px solid black', backgroundColor: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
                    <Typography component='small'>{charLimit - noteText.length} Remaining</Typography>
                    <Button onClick={handleSaveClick} sx={{ backgroundColor: 'rgb(233, 233, 233)', borderRadius: '15px', padding: '5px 10px 5px 10px', border: 'solid 4px #308d46', ":hover": { backgroundColor: 'black', color:'aquamarine' } }}>Save</Button>
                </Typography>
            
        </Typography>
    )
}

export default AddNote
