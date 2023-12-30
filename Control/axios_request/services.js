//TODO: refactor the dotenv file to avoid duplication in axios request files
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import axios from "axios";
// import { findDotEnv } from "Helper/findDotEnv.js";

export const createService = async (serviceData) => {
  return await axios.post(`${process.env.API_URL}/createService`, {
    serviceData: serviceData,
  });
};

export const findService = async (serviceId) => {
  return await axios.post(`${process.env.API_URL}/findService`, {
    serviceId: serviceId,
  });
};

export const getAllServices = async () => {
  return await axios.get(`${process.env.API_URL}/getAllServices`);
};

export const editService = async (serviceId, serviceData) => {
  return await axios.post(`${process.env.API_URL}/editService`, {
    serviceId: serviceId,
    serviceData: serviceData,
  });
};

export const deleteService = async (serviceId) => {
  return await axios.post(`${process.env.API_URL}/deleteService`, {
    serviceId: serviceId,
  });
};
