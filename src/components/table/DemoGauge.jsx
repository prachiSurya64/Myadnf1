import  { useEffect, useRef } from 'react';
import { Gauge } from '@ant-design/plots';

const DemoGauge = () => {
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ['#5BAFA9', '#68437E', '#214542'];
//   const color = ['#F4664A', '#FAAD14', '#30BF78'];
  const graphRef = useRef(null);

  const config = {
    percent: 0,
    innerRadius: 0.75,
    type: 'meter',
    meter: {
      steps: 50,
      stepRatio: 0.6,
    },
    range: {
      ticks: [0, 1],
    //   color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
         
          color: ['l(0) 0:#5BAFA9 0.5:#68437E 1:#EEF7F6'],
    //   color: ['l(0) 0:red 0.5:green 1:blue'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      title: {
        formatter: ({ percent }) => {
          if (percent < ticks[1]) {
            return 'Difference';
          }
          if (percent < ticks[2]) {
            return 'middle';
          }
          return 'excellent';
        },
        style: ({ percent }) => {
          return {
            fontSize: '36px',
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
          };
        },
      },
      content: {
        offsetY: 36,
        style: {
          fontSize: '24px',
          color: '#4B535E',
        },
        formatter: () => 'System performance',
      },
    },
    onReady: (plot) => {
      graphRef.current = plot;
    },
  };

  useEffect(() => {
    if (graphRef.current) {
      let data = 0.7;
      const interval = setInterval(() => {
        if (data >= 1.5) {
          clearInterval(interval);
        }
        data += 0.005;
        graphRef.current.changeData(data > 1 ? data - 1 : data);
      }, 100);
    }
  }, [graphRef]);

  return <Gauge {...config} />;
};

export default DemoGauge;
