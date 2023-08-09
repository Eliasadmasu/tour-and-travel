import { Box, Typography, styled } from "@mui/material";
import "./contact.css";
const Background = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: '"Poppins",sans-serif',
  fontWeight: "900",
  fontSize: "50px",

  backgroundImage:
    "url(https://www.newgenapps.com/hubfs/Imported_Blog_Media/Website-Design-Background-Feb-09-2022-03-13-55-73-AM.png)",
  height: "75vh",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
});
const ContactUSForm = styled(Box)({
  width: "600px",
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: '"Poppins",sans-serif',
  background: "linear-gradient(   #82EEFD,  #63C5DA)",

  borderRadius: "20px",
  // color: "white",
});

const FormCont = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

const Contact = () => {
  return (
    <Box>
      <Background>Contact Us</Background>
      <FormCont>
        <ContactUSForm>
          <Typography
            sx={{
              fontFamily: '"Poppins",sans-serif',
              fontSize: "30px",
              textShadow: "3px 3px 10px white",
            }}
          >
            Send a message to us!
          </Typography>
          <label>
            <div>Name</div>

            <input
              style={{
                width: "500px",
                height: "30px",
                borderRadius: "10px",
                padding: "10px",
                border: "none",
              }}
              type="text"
              placeholder="Enter your name"
            />
          </label>
          <label>
            <div>Email</div>

            <input
              style={{
                width: "500px",
                height: "30px",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
              }}
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label>
            <div>Subject</div>

            <input
              style={{
                width: "500px",
                height: "30px",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
              }}
              type="text"
              placeholder="Subject"
            />
          </label>
          <label>
            <div>Message</div>

            <input
              style={{
                width: "500px",
                height: "60px",
                borderRadius: "10px",
                padding: "10px",
                border: "none",
              }}
              type="text"
              placeholder="Any thing in you mind.."
            />
          </label>
        </ContactUSForm>
      </FormCont>
    </Box>
  );
};
export default Contact;
