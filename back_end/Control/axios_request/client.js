import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
export const findClient = async (keyword) => {
  return await axios.post(`${process.env.API_URL}/findClient`, {
    keyword: keyword,
  });
};

export const createClient = async (clientData) => {
  return await axios.post(`${process.env.API_URL}/createClient`, {
    clientData: clientData,
  });
};

export const editClient = async (clientId, updatedData) => {
  return await axios.post(`${process.env.API_URL}/editClient`, {
    clientId: clientId,
    updatedData: updatedData,
  });
};

export const deleteClient = async (clientId) => {
  return await axios.post(`${process.env.API_URL}/deleteClient`, {
    clientId: clientId,
  });
};
