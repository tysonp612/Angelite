import { API_URL } from "@env";

import axios from "axios";

export const createService = async (serviceData) => {
	return await axios.post(`${API_URL}/services/createService`, {
		serviceData: serviceData,
	});
};

export const findService = async (serviceId) => {
	return await axios.post(`${API_URL}/services/findService`, {
		serviceId: serviceId,
	});
};

export const getAllServices = async () => {
	return await axios.get(`${API_URL}/services/getAllServices`);
};

export const editService = async (serviceId, serviceData) => {
	return await axios.post(`${API_URL}/services/editService`, {
		serviceId: serviceId,
		serviceData: serviceData,
	});
};

export const deleteService = async (serviceId) => {
	return await axios.post(`${API_URL}/services/deleteService`, {
		serviceId: serviceId,
	});
};
