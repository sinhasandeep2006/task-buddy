import { API_PATHS } from "./apiPath";
import axiosInstance from "./axoisInstance";
const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile); // or "file", depending on backend

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url; // return the URL directly
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
