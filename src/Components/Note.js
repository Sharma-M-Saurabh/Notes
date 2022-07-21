import React from 'react'
import {  Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
// import  Button from '@mui/icons-material/Button';

const Note = ({id ,text,date,handleDelete}) => {
  return (
    <>
    <Typography component="div"  variant='body1' sx={{marginTop : '5%',background: 'linear-gradient(to right bottom,  #B41C1C, #6B1F20 , #212224)', whiteSpace : 'pre-wrap' , borderRadius : '10px' , padding : '1rem' , minHeight : '170px', display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between' }}  >
        <Typography component='span'>{text}</Typography>

        <Typography component='div' sx={{display : 'flex' , alignment : 'center' , justifyContent : 'center' }}>
            <Typography>{date}</Typography>
            
            {/* <Button onClick={()=>handleDelete(id)}><DeleteIcon/></Button> */}
             <DeleteIcon onClick={()=>handleDelete(id)} sx={{cursor : 'pointer'}}/>


        </Typography>

    </Typography>
    </>
  )
}

export default Note
