import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52805756-0bb10a10045fa9da16982d34a";

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
