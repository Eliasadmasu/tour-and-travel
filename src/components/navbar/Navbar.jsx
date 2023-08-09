import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <Box className="container">
      <Box
        className="navbar"
        sx={{ width: { sm: "100%", md: "80%", lg: "90%" } }}
      >
        <Typography
          className="logo"
          sx={{
            fontSize: "23px",
            fontWeight: 900,
            fontFamily: '"Poppins",sans-serif',
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            Trippy
          </Link>
        </Typography>
        {/*  */}
        {
          <div className="menu-icons">
            <i
              onClick={() => {
                setshow(!show);
              }}
              className={show ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        }
        {/*  */}
        <div className={`dColumn ${show ? "" : "dColumn1"}`}>
          <Box className="links" mr={3}>
            <div className="hoverScale">
              <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                <i className="fa-solid fa-house-user"></i> Home
              </Link>
            </div>
            <div className="hoverScale">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/about"}
              >
                <i className="fa-solid fa-circle-info"></i> About
              </Link>
            </div>
            <div className="hoverScale">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/service"}
              >
                <i className="fa-solid fa-briefcase"></i>Service
              </Link>
            </div>
            <div className="hoverScale">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/contact"}
              >
                <i className="fa-solid fa-address-book"></i>Contact
              </Link>
            </div>
          </Box>
          <Link to={"/signup"}>
            <Button
              sx={{ fontFamily: '"Poppins",sans-serif' }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </Box>
    </Box>
  );
};
export default Navbar;
