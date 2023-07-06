import { NextFunction, Request, Response } from "express";

interface Req extends Request{
    user : {}
}

module.exports = {
    userInfoController : (req:Req, res:Response, next:NextFunction) => {
        res.send(req.user)
    }
}