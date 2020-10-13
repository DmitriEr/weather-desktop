import { API_URL_POSITION } from '../../Keys/index';

const link = 'https://ipinfo.io';

async function getCurrentPosition() {
  try {
    const url = `${link}?token=${API_URL_POSITION}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTPS ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error in ipinfo - ${error.message}`);
  }
}

export default getCurrentPosition;
