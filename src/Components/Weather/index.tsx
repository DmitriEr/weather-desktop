import React from 'react';
import { Card, Avatar } from 'antd';
import { days, monthes } from '../../Constants';
import { TypeDateWeather } from '../../interfaces';
import './index.scss';

const { Meta } = Card;

interface Props {
  dataWeather: TypeDateWeather;
}

export const Day: React.FunctionComponent<Props> = ({ dataWeather }) => {
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

  return (
    <Card tabIndex={0} className="weather-card">
      <Meta
        avatar={
          <Avatar
            src={require(`../../Assets/${description}.svg`)}
            className="weather-description"
          />
        }
        title={number}
        description={`${temperature} °C`}
      />
    </Card>
  );
};
