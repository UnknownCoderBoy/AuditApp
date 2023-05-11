import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import DefaultProfile from "../../assets/DefaultProfile.jpg";

import { ExitToAppOutlined } from "@mui/icons-material";
import MenuLink from "../menuLink/MenuLink";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">AuditApp</span>
        </div>
        {/* <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div> */}
        <div className="navbarRight">
          <img
            className="profileImg"
            src={currentUser.photoURL ? currentUser.photoURL : DefaultProfile}
            alt=""
          />
          <span className="navbarName">{currentUser.displayName}</span>
          <span onClick={handleLogout}>
            <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
