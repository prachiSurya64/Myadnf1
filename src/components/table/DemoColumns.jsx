
import { Column } from '@ant-design/plots';

function DemoColumns() {
  const data = [
    {
      type: '1-3seconds',
      value: 0.16,
    },
    {
      type: '4-10seconds',
      value: 0.125,
    },
    {
      type: '11-30seconds',
      value: 0.24,
    },
    {
      type: '31-60seconds',
      value: 0.19,
    },
    {
      type: '1-3points',
      value: 0.22,
    },
    {
      type: '3-10points',
      value: 0.05,
    },
    {
      type: '10-30points',
      value: 0.01,
    },
    {
      type: '30+points',
      value: 0.015,
    },
  ];
  const paletteSemanticRed = '#5BAFA9';
  const brandColor = '#68437E';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30points' || type === '30+points') {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
}

export default DemoColumns;
