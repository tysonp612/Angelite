//TODO: refactor the dotenv file to avoid duplication in axios request files
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import axios from "axios";

export const createBooking = async (bookingData) => {
  return await axios.post(`${process.env.API_URL}/createBooking`, {
    bookingData: bookingData,
  });
};

export const getAllBookings = async (date) => {
  return await axios.post(`${process.env.API_URL}/getAllBookings`, {
    date: date,
  });
};

export const getOneBooking = async (bookingId) => {
  return await axios.get(`${process.env.API_URL}/getOneBooking`, {
    bookingId: bookingId,
  });
};

//TODO: Edit needs to be tested first to adjust
export const editBooking = async (bookingId, bookingData) => {
  return await axios.post(`${process.env.API_URL}/editBooking`, {
    bookingId: bookingId,
    bookingData: bookingData,
  });
};

export const deleteBooking = async (bookingId) => {
  return await axios.post(`${process.env.API_URL}/deleteService`, {
    bookingId: bookingId,
  });
};

export const getClientBookings = async (clientId) => {
  return await axios.post(`${process.env.API_URL}/getClientBookings`, {
    clientId: clientId,
  });
};
