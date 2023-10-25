// import { useState, useEffect } from 'react';
// import { Area } from '@ant-design/plots';

// const DemoArea = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

//   const config = {
//     data,
//     xField: 'Date',
//     yField: 'scales',
//     xAxis: {
//       range: [0, 1],
//       tickCount: 5,
//     },
//     areaStyle: () => {
//       return {
//         fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
//       };
//     },
    
//   };

//   return <Area {...config} />;
 
// };

// export default DemoArea;


import  { useState, useEffect } from 'react';
import { Radar } from '@ant-design/plots';

const DemoRadar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: 'Fraction',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    area: {}, // Open area
    point: {
      size: 2, // Turn on auxiliary points
    },
  };

  return <Radar {...config} />;
};

export default DemoRadar;
