

import React, { useEffect } from 'react'


function GoogleLogin() {

  useEffect(()=>{
    /* global google */ 
    google.accounts.id.initialize({
      client_id : import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback:(resp) => {
        console.log("jwt encoded token : ", resp?.credential)
      }
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme : "outline",
        size : "large"
      }
    )
  },[])

  return (
    <div id="signInDiv"></div>
  )
}

export default GoogleLogin