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
