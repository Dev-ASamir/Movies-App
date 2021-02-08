import { SearchResponse } from '../common';
import axios from 'axios';
import { API_KEY, BASE_URL, SEARCH_QUERY } from '../common';
export const getMovies = async (query: string) => {
  let requestData: SearchResponse = {
    movies: [],
    error: false,
  };
  const url = BASE_URL + SEARCH_QUERY + query + '&' + API_KEY;
  const response = await axios.get(url);
  try {
    if (response.data) {
      requestData = {
        movies: response.data.results,
        error: false,
      };
      return requestData;
    }
    return { ...requestData, error: true };
  } catch (error) {
    return error.body;
  }
};
