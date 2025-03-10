import { api } from "../configs/axiosConfig";

export const getTestMessage = async () => {
    const response = await api.get("/test");
    return response.data; // data만 반환
};