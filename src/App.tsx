import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Select } from 'antd';
import { Day } from './Components/Weather';
import getCurrentPosition from './Server/Position';
import getWeather from './Server/Weather';
import { TypeWeather, TypeDataPosition, TypeDateWeather } from './interfaces';
import { count } from './Constants';
import './App.css';

const App = () => {
  const [result, setResult] = useState<Array<TypeDateWeather>>([]);
  const [place, setPlace] = useState<TypeWeather>({
    cityName: '',
    latitude: '0',
    longitude: '0',
  });

  useEffect(() => {
    getCurrentPosition().then((value: TypeDataPosition) => {
      const { loc, city } = value;
      const path: string[] = loc.split(',');
      setPlace({
        ...place,
        cityName: city,
        latitude: path[0],
        longitude: path[1],
      });
    });
  }, []);

  useEffect(() => {
    const { cityName, latitude, longitude } = place;
    getWeather(latitude, longitude).then((weather: TypeDateWeather[]) => {
      setResult(weather);
    });
  }, [place]);

  return (
    <Layout className="weather__wrapper">
      <div>
        <h1 className="wether__city">{place.cityName}</h1>
        <div>
          <span>Выбрать количество дней:</span>
          <Select>
            {count.map((el: number) => {
              return (
                <Select.Option value={el} key={el} defaultValue={1}>
                  {el}
                </Select.Option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="weather__cards">
        {result.map((value, index) => {
          return <Day data={value} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default App;
