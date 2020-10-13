import React from 'react';
import { Card, Avatar } from 'antd';
import { days, monthes } from '../../Constants';

const { Meta } = Card;

export const Day = (props: any) => {
  const { data } = props;
  const temperature = Math.round(data.temp[1].max.value);
  const description = data.weather_code.value;

  const getData = () => {
    const dates: any = new Date(data.observation_time.value);
    const num: any = dates.getDate();
    const day: any = dates.getDay();
    const month: any = dates.getMonth();
    return `${num} ${monthes[month]}, ${days[day]}`;
  };

  const number = getData();

  return (
    <Card tabIndex={0} className="weather__card">
      <Meta
        avatar={
          <Avatar
            src={`../src/Assets/${description}.svg`}
            className="weather__description"
          />
        }
        title={number}
        description={`${temperature} °C`}
      />
    </Card>
  );
};