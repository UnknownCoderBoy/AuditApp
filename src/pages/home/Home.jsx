import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Cards from "../../components/cards/Cards";
import Grid from "@mui/material/Grid";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Sidebar />
          <div className="update">
            <div className="updateWrapper">
              <h3 className="updateTitle">Edit Your Account</h3>

              <div className="updateContainer">
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={4}
                >
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Cards />
                  </Grid>
                  <Grid item item lg={3} md={4} sm={6} xs={12}>
                    <Cards />
                  </Grid>
                  <Grid item item lg={3} md={4} sm={6} xs={12}>
                    <Cards />
                  </Grid>
                  <Grid item item lg={3} md={4} sm={6} xs={12}>
                    <Cards />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          {/* <Rightbar /> */}
        </div>
      </>
    </div>
  );
};

export default Home;
