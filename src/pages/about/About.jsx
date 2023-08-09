import { Box, Typography, styled } from "@mui/material";
//
//

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

const BackgroundImg = styled(Box)({
  backgroundImage:
    "url(https://i.pinimg.com/originals/28/fa/d1/28fad17aba692fa7aa0f8371b4674a28.jpg)",
  borderEndStartRadius: "110px",

  height: "90vh",
  width: "100%",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: '"Poppins",sans-serif',
  fontSize: "90px",
  color: "white",
  textShadow: "7px 7px 10px black",
});
const Text = styled(Typography)({
  width: "70%",
  marginTop: "20px",
});

export const About = () => {
  return (
    <Box>
      <BackgroundImg>About Us</BackgroundImg>
      <Container>
        {" "}
        <Text sx={{ fontFamily: '"Poppins",sans-serif' }}>
          <Box style={{ fontSize: "30px" }}> Welcome</Box>
          to Trippy, your go-to travel website for discovering new destinations
          and planning memorable adventures. Our passion for travel led us to
          create this platform to inspire and assist fellow wanderers in finding
          their dream getaways. At Trippy, we believe that every journey is a
          unique experience, and we strive to provide a wide range of travel
          options to cater to diverse interests and preferences. Whether youre
          seeking pristine beaches, historic landmarks, thrilling adventures, or
          serene landscapes, our platform offers a curated selection of
          destinations that will leave you awe-inspired.
          <br />
          <br />
          Our team of travel enthusiasts has carefully curated travel guides,
          tips, and recommendations to make your travel planning seamless and
          enjoyable. From destination highlights to practical travel advice,
          youll find everything you need to create your perfect itinerary. We
          are committed to delivering the highest level of service and ensuring
          that your travel experiences are unforgettable. Trippy is your travel
          companion, guiding you to new horizons and helping you make cherished
          memories with every journey you take.
        </Text>
        <Text sx={{ fontFamily: '"Poppins",sans-serif' }}>
          <span style={{ fontSize: "30px" }}> Our Mission</span> <br />
          To inspire and enrich the lives of travelers by providing them with
          seamless access to unique, curated destinations and personalized
          travel experiences. We aim to be a trusted travel companion, guiding
          our users to create unforgettable memories and explore the world with
          confidence. Through valuable resources and expert insights, we aspire
          to make every journey an enriching and transformative experience.
        </Text>
        <Text sx={{ fontFamily: '"Poppins",sans-serif' }}>
          <span style={{ fontSize: "30px" }}> Our Vision</span> <br /> Our
          vision is to become the leading global platform for travel
          enthusiasts, fostering a vibrant community of wanderers sharing their
          experiences, stories, and travel wisdom. We envision a world where
          everyone can embark on extraordinary journeys, embracing diverse
          cultures and fostering understanding among people. With innovation and
          passion, we aim to revolutionize the way people discover, plan, and
          embark on their adventures, inspiring a lifetime of exploration and
          discovery. Feel free to customize and expand upon these ideas to align
          with the unique goals and aspirations of your travel website. These
          statements can serve as a foundation for your Our Mission and Our
          Vision sections on the About Us page, and you can elaborate further on
          how your website will achieve these objectives and make a positive
          impact on the travel community.
        </Text>
      </Container>
    </Box>
  );
};
