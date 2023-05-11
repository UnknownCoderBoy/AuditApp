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
        <MenuLink icon={<AssignmentInd />} text="Craftmanship" link="/" />
        <MenuLink
          icon={<Assignment />}
          text="PQ Merit Rating"
          link="/meritrating"
        />
        <MenuLink icon={<SettingsSuggest />} text="E-Cube" link="/ecube" />
        <MenuLink
          icon={<Straighten />}
          text="Gap and Flushness Measurment"
          link="/measurment"
        />
        <MenuLink
          icon={<Psychology />}
          text="Functionality"
          link="/functionality"
        />
        <MenuLink icon={<Settings />} text="Settings" link="/settings" />
      </div>
    </div>
  );
};

export default Sidebar;
