import axiosInstance from "./axiosInstance";

export const getTeachingChatsAPI = async() => {
    try {
		const response = await axiosInstance.get("/chats/teach");
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error fetching teaching conversations:", error);
        throw error;
	}
}

export const getLearningChatsAPI = async() => {
	try {
		const response = await axiosInstance.get("/chats/learn");
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error fetching learning conversations:", error);
        throw error;
	}
}

export const getChatAPI = async(chatID) => {
	try {
		const response = await axiosInstance.get(`/chats/${chatID}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error fetching chat details:", error);
        throw error;
	}
}

export const increaseSkillProgressAPI = async(chatID) => {
	try {
		const response = await axiosInstance.get(`/chats/increaseProgress/${chatID}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error increasing skill progress:", error);
        throw error;
	}
}

