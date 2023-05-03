import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./widget.scss";
import world from "../../assets/world.jpg";
import schoolpupils from "../../assets/schoolpupils.jpg";
import user from "../../assets/learn.jpg";

const Widget = ({ type }) => {
  const { currentUser } = useContext(AuthContext);
  const title =
    type === "user"
      ? "Reccomended for " + currentUser.displayName
      : type === "popular"
      ? "Popular on DesignMediaX"
      : "Editor's choice";

  const img =
    type === "user" ? user : type === "popular" ? world : schoolpupils;

  return (
    <div className="widget">
      <span className="rightTitle">{title}</span>
      <img className="rightImg" src={img} alt="" />
    </div>
  );
};

export default Widget;
