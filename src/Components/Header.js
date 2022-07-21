import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = ({ handletoggleButton }) => {
  return (
    <>

      <Typography component="div" variant="body1">
        {/* <Box color="primary.main">primary.main</Box> */}
        <Typography component='h1' sx={{ position: 'fixed', fontSize: '30px', fontWeight: 'bold' }}><Typography component='span' sx={{ color: 'Red', fontWeight: 'bold', fontSize: '30px' }}>React</Typography>Notes</Typography>
        <Button onClick={() => handletoggleButton((darkMod) => !darkMod)} sx={{ marginLeft: '900px', marginBottom: '4%', position: 'relative', border: '5px solid red', borderRadius: '10px', width: '12%',  ":hover": { backgroundColor: 'black', color: 'red' } }}>Toggle</Button>
      </Typography>

    </>
  )
}

export default Header
