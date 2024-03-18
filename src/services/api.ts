import axios, { AxiosInstance } from "axios";
//https://sujeitoprogramador.com/r-api/?api=filmes


const urlApi : string = 'https://sujeitoprogramador.com/' 

export const apiConfig: AxiosInstance = axios.create(
    
    {
        baseURL: urlApi
    }
);

