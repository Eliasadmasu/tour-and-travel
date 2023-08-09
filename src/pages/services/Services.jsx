import { Box, styled } from "@mui/material";
import ThirdPage from "../../components/homeComp/ThirdPage";

const Background = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: '"Poppins",sans-serif',
  fontWeight: "900",
  fontSize: "50px",

  backgroundImage:
    "url(https://docca-europe.com/wp-content/uploads/2019/02/slider8-1030x687.jpg)",
  height: "80vh",
  backgroundSize: "cover",
  borderEndStartRadius: "110px",
});

const Services = () => {
  return (
    <Box>
      <Background>Services</Background>
      <Box margin={"-100px"}>
        <ThirdPage />
      </Box>
    </Box>
  );
};
export default Services;
