export interface TypeWeather {
  cityName: string;
  latitude: string;
  longitude: string;
}

export interface TypeTime {
  [key: number]: string;
}

export interface TypeDataPosition {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

export interface TypeDateWeather {
  feels_like: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
  humidity: {
    min: { value: number; units: string };
    observation_time: string;
  }[];
  lat: number;
  lon: number;
  observation_time: { value: string };
  temp: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
  weather_code: { value: string };
  wind_speed: {
    min: { value: number; units: string };
    observation_time: string;
  }[];
}

export interface TypeTheme {
  hits: {
    comments: number;
    downloads: number;
    favorites: number;
    id: number;
    imageHeight: number;
    imageSize: number;
    imageWidth: number;
    largeImageURL: string;
    likes: number;
    pageURL: string;
    previewHeight: number;
    previewURL: string;
    previewWidth: number;
    tags: string;
    type: string;
    user: string;
    userImageURL: string;
    user_id: number;
    views: number;
    webformatHeight: number;
    webformatURL: string;
    webformatWidth: number;
  }[];
  total: number;
  totalHits: number;
}
