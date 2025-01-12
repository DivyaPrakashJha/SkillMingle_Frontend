import axiosInstance from "./axiosInstance";

export const loginAPI = async (credentials) => {
	try {
		const response = await axiosInstance.post("/users/login", credentials);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Login error:", error);
		throw error;
	}
};

export const signupAPI = async (signupData) => {
	try {
		const response = await axiosInstance.post("/users/signup", signupData);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Signup error:", error);
		throw error;
	}
};

export const forgotPasswordAPI = async (email) => {
	try {
		const response = await axiosInstance.post("/users/forgotPassword", {email});
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Forgot password error:", error);
		throw error;
	}
};

export const resetPasswordAPI = async (resetData, token) => {
	try {
		const response = await axiosInstance.patch(
			`/users/resetPassword/${token}`,
			resetData
		);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Reset password error:", error);
		throw error;
	}
};
