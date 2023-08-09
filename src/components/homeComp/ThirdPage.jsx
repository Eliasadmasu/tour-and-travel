import { Box, Typography } from "@mui/material";

const ThirdPage = () => {
  return (
    <Box mt={"50px"}>
      <Box className={"sendPageHeader"}>
        <Typography
          sx={{
            fontFamily: '"Poppins",sans-serif',
            fontSize: "50px",
            fontWeight: 800,
          }}
        >
          Recent Trips
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: '"Poppins",sans-serif' }}
        >
          You can discover unique destinations using Google Maps
        </Typography>
      </Box>
      {/*  */}
      {/*  */}
      {/*  */}
      <ul className="thirdCont" style={{ marginTop: "60px" }}>
        {/*  */}
        {/*  */}
        <li className="listWrapper">
          {" "}
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="Thirdimage"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/indonesia-tips-cover.jpg"
            />
          </span>
          <span className="details">
            <b style={{ fontSize: "25px" }}>Trip in indonesia</b> <br /> Bali is
            a tropical paradise nestled in Indonesia, renowned for its
            captivating beauty and vibrant culture. With its lush landscapes,
            stunning rice terraces, and pristine beaches, Bali offers an idyllic
            retreat for travelers. Visitors can immerse themselves in the
            islands rich traditions by attending colorful temple ceremonies and
            experiencing the warm hospitality of the locals.
          </span>
        </li>
        {/*  */}
        {/*  */}
        {/* 2 */}
        {/*  */}
        {/*  */}
        <li className="listWrapper">
          {" "}
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="Thirdimage"
              src="https://cms-b-assets.familysearch.org/dims4/default/a3b8ea1/2147483647/strip/true/crop/749x500+0+0/resize/1240x828!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F5b%2F27%2F69ebaad808524e7b1354fc2fda61%2Frio-de-janeiro.jpg"
            />
          </span>
          <span className="details">
            <b style={{ fontSize: "25px" }}>Trip Rio de Janeiro</b> <br /> is a
            vibrant and dynamic city in Brazil, nestled between lush mountains
            and picturesque beaches. Known for its lively culture and stunning
            natural beauty, Rio offers an exhilarating trip for every traveler.
            The iconic Christ the Redeemer statue stands tall atop Corcovado
            Mountain, providing breathtaking panoramic views of the city.
          </span>
        </li>
        {/*  */}
        {/*  */}
        {/* 3 */}
        {/*  */}
        {/*  */}
        <li className="listWrapper">
          {" "}
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="Thirdimage"
              src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/01/HAWAII.jpg?fit=1300%2C731&ssl=1"
            />
          </span>
          <span className="details">
            <b style={{ fontSize: "25px" }}>Trip Hawaii, USA</b> <br /> Hawaii
            is a dreamlike archipelago in the Pacific Ocean, renowned for its
            paradise-like beauty and laid-back island lifestyle. With its
            enchanting landscapes, warm climate, and aloha spirit, Hawaii offers
            an unforgettable tropical escape. Explore the volcanic wonders of
            Hawaii Volcanoes National Park, where you can witness the raw power
            of active volcanoes and walk amidst ancient lava flows.
          </span>
        </li>
        {/*  */}
        {/*  */}
      </ul>
    </Box>
  );
};
export default ThirdPage;
