import { NextFunction, Request, Response } from "express";

let {verifyGoogleCredential} =  require("../services/google/index.ts")

interface Req extends Request {
    user : {}
} 


const auth = async (req: Req  , res : Response, next : NextFunction) => {

     let access_token = req.headers?.token ;

     if(!access_token){
        console.log("token : ", access_token)
         return res.json({error : true, msg : "token is missing"})
     }

     let result = await verifyGoogleCredential(access_token)

     console.log("resullt ", result)

     /* @ignore_ts */
     req.user = result ;

     next()
}

module.exports = auth ;