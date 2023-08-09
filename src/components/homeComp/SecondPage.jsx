import { Box, Typography } from "@mui/material";
import "../../pages/Home/home.css";
//
const SecondPage = () => {
  return (
    <Box pb={"110px"}>
      <Box className={"sendPageHeader"}>
        <Typography
          // variant="h4"
          sx={{
            fontFamily: '"Poppins",sans-serif',
            fontSize: "50px",
            fontWeight: 800,
          }}
        >
          Popular Destinations
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: '"Poppins",sans-serif' }}
        >
          Tours give you the opportunity to see a lot, within a time frame.
        </Typography>
      </Box>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Box mt={"100px"} className="mainCont" display={"flex"}>
        <Box className="subMain one">
          <Typography sx={{ fontFamily: '"Poppins",sans-serif' }}>
            <span
              style={{
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              Destination: Santorini, Greece <br />
            </span>
            Santorini, Greece, is a captivating island in the Aegean Sea. Known
            for its breathtaking sunsets, white-washed buildings with blue
            domes, and black sand beaches, it offers a picturesque escape.
            Explore ancient ruins, relax on pristine shores, indulge in
            Mediterranean cuisine, and experience warm Greek hospitality.
            Santorini promises an unforgettable travel experience.
          </Typography>
        </Box>
        <Box className="subMain two">
          <Box className="imageWrapper">
            <img
              className="img One"
              src="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            />
            <img
              className="img Two"
              src="https://www.moon.com/wp-content/uploads/2020/03/Santorini.png?fit=1083%2C723"
            />
          </Box>
        </Box>
      </Box>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Box mt={"200px"} className="mainCont" display={"flex"}>
        <Box className="subMain two">
          <Box className="imageWrapper">
            <img
              className="img One"
              // style={{ position: "absolute", top: "40px" }}
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16F44/production/_119802049_gettyimages-1199223365.jpg"
            />
            <img
              className="img Two"
              src="https://www.artnews.com/wp-content/uploads/2021/08/AP20209416580201.jpg?w=2000"
            />
          </Box>
        </Box>
        <Box className="subMain one">
          {" "}
          {/* Reversed order of 'subMain' classes */}
          <Typography sx={{ fontFamily: '"Poppins",sans-serif' }}>
            <span style={{ fontSize: "30px", fontWeight: 700 }}>
              Destination: Lalibela, Ethiopia <br />
            </span>
            Lalibela, Ethiopia, is a UNESCO World Heritage site renowned for its
            rock-hewn churches. Carved out of solid rock, these astonishing
            structures showcase intricate architecture and religious
            significance. Lalibela's rich history and spiritual ambiance make it
            a must-visit destination for cultural enthusiasts and history buffs.
            Beyond the churches, the vibrant local culture, warm hospitality,
            and stunning landscapes of the Ethiopian highlands add to the allure
            of this ancient city. Experience the magic of Lalibela and immerse
            yourself in Ethiopia's remarkable heritage.
          </Typography>
        </Box>
      </Box>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </Box>
  );
};
export default SecondPage;
