import { AxiosClient } from "./axios-client"


export const getUserInfo = async (req : any) => {
    let axiosClient = new AxiosClient(req);
    let res = await axiosClient.get("/user-info");
    return res.data
}