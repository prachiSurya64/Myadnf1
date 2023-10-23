// const antdThemeConfig = {
//   theme: {
//     components: {
//       colorPrimary: {
//         main: "#68437E",
//       },
//       colorSuccess: {
//         main: "#5BAFA9",
//       },
//       Button: {
//         borderRadius: 50,
//         colorPrimary: {
//           dark: "#482E51",
//                   main: "#68437E",
//                   light: "#F3EEF6",
//                   colorText: "#FFFFFF",
//         },
//         colorSuccess: {
//           dark: "#214542",
//                   main: "#5BAFA9",
//                   light: "#EEF7F6",
//                   colorText: "#68437E",
//         },
//       },
//       Table: {
//         borderColor: "red",
//       },
//       Checkbox: {
//         colorPrimary: "red",
//       },
//       Input: {
//         activeBorderColor: "#68437E",
//       },
//       InputSearch: {
//         activeBorderColor: "#68437E",
//       },
//       typography: {
//         fontFamily: "cursive",
//         fontSize: "38px",
//         fontWeight: "600",
//       },
//       Card: {
//         colorBgContainer: "#5BAFA9",
//       },
//       Menu: {
//         itemActiveBg: "#F3EEF6",
//         itemSelectedBg: "#5BAFA9",
//       },
//       Popconfirm: {
//         colorWarning: "#68437E",
//       },
//     },
//     token: {
//       colorPrimary: "#612563",
//     },
//     algorithm: ["dark", "compact"],
//   },
// };

// export default antdThemeConfig;








const antdThemeConfig = 
   {
    components: {
      borderRadius: 50,
      colorPrimary: {
        dark: "#482E51",
        main: "#68437E",
        light: "#F3EEF6",
        colorText: "#FFFFFF",
      },
      colorSuccess: {
        dark: "#214542",
        main: "#5BAFA9",
        light: "#EEF7F6",
        colorText: "#68437E",
      },
      Button: {
     
        borderRadius: 50,
        colorPrimary: {
          dark: "#482E51",
          main: "#68437E",
          light: "#F3EEF6",
          colorText: "#FFFFFF",
        },
        colorSuccess: {
          dark: "#214542",
          main: "#5BAFA9",
          light: "#EEF7F6",
          colorText: "#68437E",
        },
        colorPrimaryHover: {
          dark: "#482E51",
          main: "#68437E",
          light: "#F3EEF6",
        },

        colorBorder: {
          dark: "#214542",
          main: "#5BAFA9",
          light: "#EEF7F6",
        },
        controlOutline: "rgba(0, 15, 27, 0.1)",
        controlTmpOutline: "rgba(234, 14, 14, 0.02)",
      },
      Table: {
        borderColor: "red",
        fixedHeaderSortActiveBg: "rgb(176, 20, 185)",
        headerSplitColor: "rgb(237, 213, 213)",
        headerSortHoverBg: "rgb(183, 140, 154)",
        headerBg: "red",
        colorIcon: "rgba(30, 151, 144, 0.45)",
        colorIconHover: "rgba(94, 59, 97, 0.88)",
        rowSelectedHoverBg: "rgb(136, 202, 196)",
        colorText: "rgba(51, 48, 48, 0.88)",
        headerBorderRadius: 7,
        stickyScrollBarBorderRadius: 2,
        rowSelectedBg: "rgb(137, 19, 63)",
        rowHoverBg: "rgb(253, 255, 255)",
      },
      Checkbox: {
        colorPrimaryHover: "rgb(48, 225, 203)",
        colorPrimary: "red",
      },
      Input: {
        activeBorderColor: "#68437E",
        hoverBorderColor: "#5BAFA9",
        colorIcon: "#5BAFA9",
        colorIconHover: "#68437E",
        paddingLG: 0,
        borderRadius: 45,
        controlHeight: 30,
      },
      InputSearch: {
        activeBorderColor: "#68437E",
        hoverBorderColor: "#5BAFA9",
        colorIcon: "#5BAFA9",
        colorIconHover: "#68437E",
        paddingLG: 0,
        borderRadius: 45,
        controlHeight: 30,
      },
      typography: {
        fontFamily:  ["Poppins", "sans-serif"].join(","),  
        fontWeightRegular: 300,
        fontWeightMedium: 500,
       fontWeight: 600,
        lineHeight: "46px",

        h1:{fontWeight:600,fontSize:58,lineHeight:1.1}
      },
      Card: {
        colorText: "#FFFFFF",
        colorTextHeading: "#FFFFFF",
        colorBgContainer: "#5BAFA9",
        colorBorderSecondary: "#5BAFA9",
        colorFillAlter: "#5BAFA9",
        motionDurationMid: "0.1",
      },
      Menu: {
        itemActiveBg: "#F3EEF6",
        itemSelectedBg: "#EEF7F6",
        itemSelectedColor: "#5BAFA9",
        itemHoverBg: "#EEF7F6",
        subMenuItemBg: "rgba(218, 54, 54, 0.02)",
        colorPrimaryBorder: "rgb(255, 145, 242)",
        iconSize: 16,
        borderRadius: 16,
        motionDurationMid: "0.7s",
        motionDurationSlow: "0.5s",
      },
      Popconfirm: {
        colorWarning: "#68437E",
        colorText: "rgba(186, 51, 51, 0.88)",
        colorTextHeading: "rgba(116, 42, 42, 0.88)",
      },
    },
    token: {
      colorPrimary: "#612563",
      colorInfo: "#612563",
      colorSuccess: "#568a8a",
      borderRadius: 6,
    },
    algorithm: ["dark", "compact"],
  
};

export default antdThemeConfig;
