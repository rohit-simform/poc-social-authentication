
interface Req{
    headers : {}
}

export const HEADERS = (req : Req) => {

    let headers = {
        "Content-Type": "application/json",
         charset : "UTF-8",
         "Access-Control-Allow-Origin" : "*",
         Accept : "application/json",
         "x-access-token": ""
    }

    if(req && req.headers){
        headers = {
            ...headers,
            ...req.headers
        }
    }

    return headers
}