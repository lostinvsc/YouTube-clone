import axios from 'axios';

const BASE_URL='https://youtube138.p.rapidapi.com/auto-complete/'

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key':process.env.REACT_APP_YOUTUBE_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

const fetchDataFromApi = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw error;
    }
  };

