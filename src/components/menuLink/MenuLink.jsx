import React, { useContext } from "react";
import "./menuLink.scss";
import { AuthContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MenuLink = ({ icon, text, link }) => {
  const navigate = useNavigate();
  const pageNavigate = (e) => {
    navigate(link);
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div onClick={pageNavigate}>
      <div className="menulink">
        {icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">
          {" "}
          {text === "Logout" && `( ${currentUser.displayName} )`}
        </span>
      </div>
    </div>
  );
};

export default MenuLink;
