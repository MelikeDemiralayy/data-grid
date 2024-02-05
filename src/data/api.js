import axios from "axios";

const baseURL = "http://localhost:5174/socialMediaData";

const axiosInstance = axios.create({
  baseURL,
});
// verileri çekmek için
export const fetchSocialMedia = async () => {
  const response = await axiosInstance.get();
  return response.data;
};
// yeni sosyal medya eklemek için
export const addSocialMedia = async (newSocialMedia) => {
  const response = await axiosInstance.post("", newSocialMedia);
  return response.data;
};
// Search işlemi için
export const searchSocialMedia = async (searchTerm) => {
  try {
    const response = await axiosInstance.get("");
    const filteredResults = response.data.filter(item => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filteredResults;
  } catch (error) {
    console.error("Error while searching social media:", error);
    throw error;
  }
};