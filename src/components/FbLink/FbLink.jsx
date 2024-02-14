
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




import React from 'react'

function FbLink() {
    function loginWithFacebook() {
        // Specify the required permissions
        const permissions = ['manage_pages', 'pages_show_list', 'read_insights'];
      
        // Initiate Facebook login with the required permissions
        window.FB.login(function(response) {
          if (response.authResponse) {
            // User is logged in and granted permissions
            // You can now make API calls or fetch user data
            console.log('Successful login!', response.authResponse.accessToken);
            // You can make API calls using the access token received in the response
          } else {
            // User canceled login or did not grant permissions
            console.log('Login failed or canceled by user.');
          }
        }, { scope: permissions.join(',') }); // Pass the permissions as a comma-separated string
      }
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
                onClick={loginWithFacebook}
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

