import axios from "axios";

const API_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s`;

export const fetchRecentPhotos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.photos.photo.map((photo: any) => ({
      id: photo.id,
      title: photo.title,
      url_s: photo.url_s,
    }));
  } catch (error) {
    console.error("Error fetching recent photos:", error);
    return [];
  }
};
