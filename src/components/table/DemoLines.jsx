import  { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

function DemoLines() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function asyncFetch() {
      try {
        const response = await fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log('fetch data failed', error);
      }
    }
    asyncFetch();
  }, []);

  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
}

export default DemoLines;
