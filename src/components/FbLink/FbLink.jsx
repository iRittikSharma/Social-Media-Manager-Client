
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';




// import React from 'react'

// function FbLink() {   
//   return (
//     <Container component="main" maxWidth="xs" maxHeight ="l">
//         <Box
//             sx={{
//                 marginTop: 15,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: 5,
//                 border: 1,
//                 borderColor: 'primary.main',
//                 height: 300,
//               }} 
//         >
//             <Button 
//                 variant="contained" 
//                 color="success" sx={{width :300 , height : 60}}
//                 onClick={initializeFacebookSDKAndLogin}
//             >
//                 Connect Your FB Account
//             </Button>
//             <Button variant="contained" color="error" sx={{width :300 , height : 60}}>
//                 Disconnect Your FB Account
//             </Button>
//         </Box>
//     </Container>

//   )
// }

// export default FbLink;

import FacebookLogin from '@greatsumini/react-facebook-login';
function FbLink() {
    return(
        <FacebookLogin
            appId={import.meta.env.VITE_META_APP_ID}
            onSuccess={(response) => {
                console.log('Login Success!', response);
            }}
            onFail={(error) => {
                console.log('Login Failed!', error);
            }}
            onProfileSuccess={(response) => {
                console.log('Get Profile Success!', response);
            }}
            scope='manage_pages,email,pages_show_list,read_insights,user'
        />
    )
}

export default FbLink;

// default
