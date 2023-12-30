import axios from "axios";

export const findClient = async (keyword) => {
  return await axios.post(`${process.env.REACT_APP_API}/findClient`, {
    keyword: keyword,
  });
};

export const createClient = async (clientData) => {
  return await axios.post(`${process.env.REACT_APP_API}/createClient`, {
    clientData: clientData,
  });
};

export const editClient = async (clientId, updatedData) => {
  return await axios.post(`${process.env.REACT_APP_API}/editClient`, {
    clientId: clientId,
    updatedData: updatedData,
  });
};

export const deleteClient = async (clientId) => {
  return await axios.post(`${process.env.REACT_APP_API}/deleteClient`, {
    clientId: clientId,
  });
};
