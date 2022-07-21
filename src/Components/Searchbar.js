import React from 'react'
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const searchbar = ({handleSearch}) => {
  return (
    <>

<Typography component='div' sx={{display : 'flex' , backgroundColor : 'rgb(233, 233, 233)' , padding : '1em',marginTop: '10px' , border : 'solid 4px #308d46' , alignment : 'center' , borderRadius : '10px' , }}>


        <FindInPageIcon/>
        <Input type="text" placeholder="Search for your notes..." onChange={(e)=>handleSearch(e.target.value)} sx={{border : 'none' , backgroundColor: ' rgb(233, 233, 233)' , ":focus" : {outline : 'none'}}}/>

        </Typography>
        </>
  )
}

export default searchbar
