import {
  Assignment,
  Settings,
  SettingsSuggest,
  AssignmentInd,
  Straighten,
  Psychology,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MenuLink from "../menuLink/MenuLink";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebarbarWrapper">
        <MenuLink icon={<AssignmentInd />} text="Craftmanship" />
        <MenuLink icon={<Assignment />} text="PQ Merit Rating" />
        <MenuLink icon={<SettingsSuggest />} text="E-Cube" />
        <MenuLink icon={<Straighten />} text="Gap and Flushness Measurment" />
        <MenuLink icon={<Psychology />} text="Functionality" />
        <MenuLink icon={<Settings />} text="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
