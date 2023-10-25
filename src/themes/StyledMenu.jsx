import { Menu } from "antd";
import styled from "styled-components";
import antdThemeConfig from "../components/common/antdThemeConfig";


const { components } = antdThemeConfig.theme;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    color: ${components.colorPrimary.main};
    background-color: ${components.Menu.itemActiveBg};
    border-radius: ${components.Menu.borderRadius}px;
    transition: background-color ${components.Menu.motionDurationMid};
  }

  .ant-menu-item:hover {
    background-color: ${components.Menu.itemHoverBg};
    color: ${components.colorSuccess.main};
  }

  .ant-menu-submenu-title {
    color: ${components.colorPrimary.main};
    background-color: ${components.Menu.itemActiveBg};
    border-radius: ${components.Menu.borderRadius}px;
  }

  .ant-menu-submenu-title:hover {
    background-color: ${components.Menu.itemHoverBg};
    color: ${components.colorSuccess.main};
  }

  .ant-menu-submenu.ant-menu-submenu-open < .ant-menu-submenu-title {
    color: ${components.colorPrimary.main};
    background-color: ${components.Menu.itemActiveBg};
    border-radius: ${components.Menu.borderRadius}px;
  }

  .ant-menu-item-active {
    background-color: ${components.Menu.itemSelectedBg} !important; 
    color: ${components.Menu.itemSelectedColor} !important; 
  }
`;

export default StyledMenu;
