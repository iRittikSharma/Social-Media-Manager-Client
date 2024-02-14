
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
//                 onClick={()=> alert("hello")}
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


import React from 'react';
import FacebookLogin from 'react-facebook-login';
function FbLink() {
  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response here
  };
  return (
    <FacebookLogin
      appId= {import.meta.env.VITE_META_APP_ID}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      scope="manage_pages,pages_show_list,read_insights"
      onFailure={(err) => console.log('Facebook login failed', err)}
    />
  );
}

export default FbLink;
