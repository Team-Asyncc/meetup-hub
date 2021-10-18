import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: {
		loggedIn: false,
		user: null,
		isLoading: false,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			state.loggedIn = true;
		},
		logout: (state, action) => {
			state.user = null;
			state.loggedIn = false;
		},
		updateUser: (state, action) => {
			state.user = { ...state.user, ...action.payload };
		},
		setLoginLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { login, logout, updateUser, setLoginLoading } =
	loginSlice.actions;

export const useLoginState = () => {
	return useSelector(state => state.login);
};

export const useUser = () => {
	return useSelector(state => state.login.user);
};

export default loginSlice.reducer;
