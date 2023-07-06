const { google_Auth_Handler } = require("./google-auth-handler")


   let verifyGoogleCredential = async (access_token) => {
         const user = await google_Auth_Handler(access_token)
             return user ;
    }


    module.exports = {verifyGoogleCredential} ;