import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
    baseURL: API_URL
});

API.interceptors.request.use(async (config: any) => {
    const token = await AsyncStorage.getItem('@WikkyInvest/authtkn');
    config.headers.Authorization = token;
    return config;
});

export default API;