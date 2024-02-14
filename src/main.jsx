import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.fbAsyncInit = function() {
  window.FB.init({
    appId: import.meta.env.VITE_APP_ID,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v19.0'
  });
};

// Load Facebook SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
