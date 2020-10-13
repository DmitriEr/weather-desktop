import { API_URL_THEME } from '../../Keys/index';

const pixaboyURL = 'https://pixabay.com/api/';

export const getTheme = async (weather: string) => {
  try {
    const url = `${pixaboyURL}?key=${API_URL_THEME}&orientation=horizontal&q=${weather}&category=nature&page=1&per_page=3`;

    const response = await fetch(url, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTPS ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Some error in pixaboy - ${error.message}`);
  }
};
