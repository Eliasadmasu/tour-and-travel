import { Box, Button, Typography } from "@mui/material";
import "../../pages/Home/home.css";

const FirstPage = () => {
  return (
    <Box className="bgimage">
      <Box className="centering">
        <Typography
          className="color-shadow"
          variant="h2"
          sx={{ fontFamily: '"Poppins",sans-serif', color: "white" }}
        >
          Your Journey Your Story
        </Typography>
        <Typography
          className="color-shadow"
          mb={4}
          variant="h5"
          sx={{ fontFamily: '"Poppins",sans-serif', color: "white" }}
        >
          Choose Your Favourite Destination
        </Typography>
        <Button
          className="firstPageButton"
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },

            bgcolor: "white",
            fontFamily: '"Poppins",sans-serif',
            color: "black",
          }}
        >
          Travel Plan
        </Button>
      </Box>
    </Box>
  );
};
export default FirstPage;
