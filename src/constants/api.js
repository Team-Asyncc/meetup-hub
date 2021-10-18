import myLog from '../utils/myLog';

export const API_BASE_URL = import.meta.env.VITE_API_URL;

myLog(`using api base url: `, API_BASE_URL);

export const API_ENDPOINTS = {
	LOGIN: `/login`,
	LOGOUT: `/logout`,
};
