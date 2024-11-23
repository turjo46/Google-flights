import axios from 'axios';

export const fetchFlights = async (searchParams) => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/flights',
    params: {
      ...searchParams,
    },
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.flights;
  } catch (error) {
    console.error(error);
    return [];
  }
};
