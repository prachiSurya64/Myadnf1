// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "antd";
import Themes from "../src/styles/Themes.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Themes}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@emotion/react"; // Import the ThemeProvider
// import { ConfigProvider } from "antd"; // Import ConfigProvider for Ant Design

// import "antd/dist/antd.css"; // Import Ant Design CSS

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider>
//         <ConfigProvider>
//           <App />
//         </ConfigProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
