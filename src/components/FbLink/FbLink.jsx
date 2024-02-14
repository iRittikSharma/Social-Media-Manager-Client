
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




import React from 'react'

function FbLink() {
  return (
    <Container component="main" maxWidth="xs" maxHeight ="l">
        <Box
            sx={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                border: 1,
                borderColor: 'primary.main',
                height: 300,
              }} 
        >
            <Button 
                variant="contained" 
                color="success" sx={{width :300 , height : 60}}
                onClick={()=> alert("hello")}
            >
                Connect Your FB Account
            </Button>
            <Button variant="contained" color="error" sx={{width :300 , height : 60}}>
                Disconnect Your FB Account
            </Button>
        </Box>
    </Container>

  )
}

export default FbLink;

