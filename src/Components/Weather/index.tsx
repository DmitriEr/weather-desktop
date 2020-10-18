import React from 'react';
import { Card, Avatar } from 'antd';
import { days, monthes } from '../../Constants';
import { TypeDateWeather } from '../../interfaces';
import './index.scss';

const { Meta } = Card;

interface Props {
  dataWeather: TypeDateWeather;
  todayWeather?: boolean;
}

interface WeatherProps {
  value: number;
  units: string;
}

export const Day: React.FunctionComponent<Props> = ({
  dataWeather,
  todayWeather,
}) => {
  const temperature: number = Math.round(dataWeather.temp[1].max.value);
  const description: string = dataWeather.weather_code.value;

  const getData: () => string = () => {
    const dates: Date = new Date(dataWeather.observation_time.value);
    const num: number = dates.getDate();
    const day: number = dates.getDay();
    const month: number = dates.getMonth();
    return `${num} ${monthes[month]}, ${days[day]}`;
  };

  const number: string = getData();

  const showDetails = () => {
    const wind: WeatherProps = dataWeather.wind_speed[1].max;
    const humidity: WeatherProps = dataWeather.humidity[1].max;
    const feelsLike: WeatherProps = dataWeather.feels_like[1].max;
    if (todayWeather) {
      return (
        <div className="weather-card__options">
          <p>{`Temperature: ${temperature} °C`}</p>
          <p>{dataWeather.weather_code.value}</p>
          <p>{`Wind speed: ${wind.value} ${wind.units}`}</p>
          <p>{`Humidity: ${humidity.value} ${humidity.units}`}</p>
          <p>{`Feels like: ${feelsLike.value} ${feelsLike.units}`}</p>
        </div>
      );
    }
    return <p>{`Temperature: ${temperature}`}</p>;
  };

  return (
    <div
      className={
        todayWeather ? 'weather-card__today weather-card' : 'weather-card'
      }
    >
      <Meta
        avatar={
          <Avatar
            src={require(`../../Assets/${description}.svg`)}
            className="weather-description"
            size={todayWeather ? 150 : 50}
            gap={20}
          />
        }
        title={number}
        description={showDetails()}
      />
    </div>
  );
};
