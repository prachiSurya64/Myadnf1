
// import { Rose } from "antd";
import { Rose } from '@ant-design/plots';
import styled from "styled-components";


const StyledRose = styled(Rose)`
  .ant-rose-series-multiple-label {
    fill: green; // Change label fill color to red
  }
  
  .ant-rose-series-multiple-line {
    stroke: black; // Change line stroke color to blue
  }

  .g2-tooltip {
      background-color: black;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px;
    }

    .g2-tooltip-title {
      color: #333;
      font-weight: bold;
    }
  
  // Add any other custom styles here
`;
export default  StyledRose ;

