import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
//
//

const Container = styled(Box)({
  backgroundColor: "black",
  color: "white",
  padding: "50px",
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  height: "auto",
});

const FirstCont = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "100px",
  textAlign: "center",
  alignItems: "center",
});
const Logo = styled(Box)({
  "&:hover": { backgroundColor: "gray", borderRadius: "4px" },
  height: "23px",
});
const LogoCont = styled(Box)({
  display: "flex",
  gap: "3px",
});

const SeconCont = styled(Box)({
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-evenly",
});

const UnorderdList = styled(Box)({
  listStyle: "none",
});

//
//
const HomeFotter = () => {
  return (
    <Container>
      {/* above */}
      <FirstCont className="belowMain above">
        <Typography sx={{ fontFamily: '"Poppins",sans-serif' }}>
          <span style={{ fontWeight: 800, fontSize: "25px" }}>Trippy</span>
          <br />
          Choose your favourite destination
        </Typography>
        <LogoCont>
          <Logo>
            {" "}
            <Facebook />
          </Logo>
          <Logo>
            {" "}
            <Instagram />
          </Logo>
          <Logo>
            <LinkedIn />
          </Logo>
          <Logo>
            {" "}
            <Twitter />
          </Logo>
        </LogoCont>
      </FirstCont>
      {/* above */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* below */}
      <SeconCont className="belowMain below">
        {/*  */}
        <UnorderdList style={{ fontFamily: '"Poppins",sans-serif' }}>
          <li
            style={{
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: '"Poppins",sans-serif',
            }}
          >
            Project
          </li>
          <li>Changelog</li>
          <li>Status</li>
          <li>License</li>
          <li>All Versions</li>
        </UnorderdList>
        {/*  */}
        {/*  */}
        <UnorderdList style={{ fontFamily: '"Poppins",sans-serif' }}>
          <li
            style={{
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: '"Poppins",sans-serif',
            }}
          >
            Community
          </li>
          <li>GitHub</li>
          <li>issues</li>
          <li>Project</li>
          <li>Twitter</li>
        </UnorderdList>
        {/*  */}
        {/*  */}
        <UnorderdList style={{ fontFamily: '"Poppins",sans-serif' }}>
          <li
            style={{
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: '"Poppins",sans-serif',
            }}
          >
            Help
          </li>
          <li>Support</li>
          <li>Troubleshooting</li>
          <li>Contact Us</li>
        </UnorderdList>
        {/*  */}
        {/*  */}
        <UnorderdList style={{ fontFamily: '"Poppins",sans-serif' }}>
          <li
            style={{
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: '"Poppins",sans-serif',
            }}
          >
            Others
          </li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>License</li>
        </UnorderdList>
        {/*  */}
      </SeconCont>
      {/* below */}
    </Container>
  );
};
export default HomeFotter;
