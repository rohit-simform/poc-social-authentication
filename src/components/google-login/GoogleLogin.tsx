

import React, { useEffect } from 'react'
import { getUserInfo } from '../../services'


function GoogleLogin({setGlobal}) {

  useEffect(()=>{
    /* global google */ 
    google.accounts.id.initialize({
      client_id : import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback:async (resp : any) => {
        try {
          console.log("jwt encoded token : ", resp?.credential)
        let req = {
          headers : {
            token : resp.credential,
            "token-provider" : "google"
          }
        }
         let res = await getUserInfo(req)
         console.log("res in Google Comp ", res)
         setGlobal((prevState : any) => ({
           ...prevState,
           token : resp?.credential,
           provider : "google",
           email : res?.email,
           name : res?.name,
           profile_pic : res?.picture
         }))
        } catch (error) {
          console.log("error in GoogleLogin Component ",error)
        }
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