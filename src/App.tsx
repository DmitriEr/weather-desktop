import React, { useState, useEffect } from 'react';
import { Layout, Select } from 'antd';
import { Day } from './Components/Weather';
import { getCurrentPosition } from './Server/Position';
import { getWeather } from './Server/Weather';
import { TypeWeather, TypeDataPosition, TypeDateWeather } from './interfaces';
import { count } from './Constants';
import './App.scss';

const App: React.FunctionComponent = () => {
  const [result, setResult] = useState<Array<TypeDateWeather>>([]);
  const [place, setPlace] = useState<TypeWeather>({
    cityName: '',
    latitude: '0',
    longitude: '0',
  });
  const [days, setDays] = useState<number>(1);

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

  const handleChangeSelect = (value: number) => {
    setDays(value);
  };

  return (
    <Layout className="weather-wrapper">
      <div className="weather-header">
        <h1 className="wether-city">{place.cityName}</h1>
        <div className="weather-options__wrapper">
          <span>Select count days:</span>
          <Select
            className="weather-options"
            onChange={handleChangeSelect}
            defaultValue={1}
          >
            {count.map((el: number) => {
              return (
                <Select.Option value={el} key={el}>
                  {el}
                </Select.Option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="weather-content">
        {result.map((value: TypeDateWeather, index: number) => {
          if (index === 0) {
            return <Day dataWeather={value} todayWeather={true} key={index} />;
          } else if (index > 0 && index < days) {
            return <Day dataWeather={value} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </Layout>
  );
};

export default App;
