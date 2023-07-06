import axios from "axios";
import { HEADERS } from "./Headers";


interface Req{
    headers : {}
}

export class AxiosClient{

    axiosInstance : any

    constructor(req : Req){
        this.axiosInstance = axios.create({
            baseURL : "http://localhost:5500",
            headers : HEADERS(req)
        })
    }

    get = async (relative_url : any) => {
        try {
            let res = await this.axiosInstance.get(relative_url)
            console.log(res)
            return res
        } catch (error) {
            console.log(error)
        }
    }

}