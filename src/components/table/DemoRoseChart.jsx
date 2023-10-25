
// import { Rose } from '@ant-design/plots';
import StyledRose from "../../themes/StyledRose";

function DemoRose() {
  const data = [
    {
      type: 'Category one',
      value: 27,
    },
    {
      type: 'Category 2',
      value: 25,
    },
    {
      type: 'Category three',
      value: 18,
    },
    {
      type: 'Category four',
      value: 15,
    },
    {
      type: 'Category five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15,
    },
  };
  return <StyledRose {...config} />;
}

export default DemoRose;


// import { useState, useEffect } from 'react';
// import { Rose } from '@ant-design/plots';

// function DemoRose() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antfincdn/XcLAPaQeeP/rose-data.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

//   const config = {
//     data,
//     xField: 'type',
//     yField: 'value',
//     isGroup: true,
//     seriesField: 'user',
//     radius: 0.9,
//     label: {
//       offset: -15,
//     },
//     pattern: {
//       type: 'dot',
//     },
//     interactions: [
//       {
//         type: 'element-active',
//       },
//     ],
//   };

//   return <Rose {...config} />;
// }

// export default DemoRose;
