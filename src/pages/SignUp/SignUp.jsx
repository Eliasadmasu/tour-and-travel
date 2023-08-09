import { Box, Button, Typography, styled } from "@mui/material";
import "./singup.css";
//
//

const SignUpContainer = styled(Box)({
  display: "flex",
});
const BackgroundImg = styled(Box)({
  display: "flex",

  backgroundImage:
    "url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdmVzJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)",
  backgroundSize: "cover",
  width: "50%",
  height: "100vh",
  borderBottomLeftRadius: "30px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "80px",
  color: "white",
  fontFamily: '"Poppins",sans-serif',
});
//
//
//
//
const SignUpForm = styled(Box)({
  background: "linear-gradient(   #82EEFD,  #63C5DA)",

  width: "50%",
  height: "100vh",
  borderTopRightRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
//
//
//
//
const FormContainer = styled(Box)({
  background: "linear-gradient(   #82EEFD,  #63C5DA)",
  height: "600px",
  width: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  boxShadow: "5px 5px 20px  black",
  borderBottomLeftRadius: "30px",
  borderTopRightRadius: "30px",
});

const InputName = styled(Box)({
  width: "500px",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});
const ButtonCont = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginTop: "20px",
});
//
//
const SignUp = () => {
  return (
    <SignUpContainer>
      <BackgroundImg>Join Now!</BackgroundImg>
      <SignUpForm>
        <FormContainer>
          <Typography
            style={{
              fontFamily: '"Poppins",sans-serif',
              fontSize: "50px",
              fontWeight: "700",
            }}
          >
            Sign Up
          </Typography>
          {/*  */}
          <InputName>
            <Typography style={{ fontFamily: '"Poppins",sans-serif' }}>
              Name
            </Typography>
            <input
              type="text"
              placeholder="Enter Your Name"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                padding: "10px",
                "&:focus": { backgroundColor: "white" },
              }}
            />
          </InputName>
          {/*  */}
          {/*  */}
          <InputName>
            <Typography style={{ fontFamily: '"Poppins",sans-serif' }}>
              Email
            </Typography>
            <input
              type="email "
              placeholder="Enter Your Email"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                padding: "10px",
              }}
            />
          </InputName>
          {/*  */}
          {/*  */}

          {/*  */}
          {/*  */}
          <InputName>
            <Typography style={{ fontFamily: '"Poppins",sans-serif' }}>
              Date of Birth
            </Typography>
            <input
              type="date"
              placeholder="Name"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                padding: "10px",
              }}
            />
          </InputName>
          {/*  */}
          {/*  */}
          <InputName>
            <Typography style={{ fontFamily: '"Poppins",sans-serif' }}>
              City
            </Typography>
            <input
              type="text"
              placeholder="Name"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                padding: "10px",
              }}
            />
          </InputName>
          {/*  */}
          {/*  */}
          <InputName>
            <Typography style={{ fontFamily: '"Poppins",sans-serif' }}>
              Country
            </Typography>
            <input
              type="text"
              placeholder="Name"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                padding: "10px",
              }}
            />
          </InputName>
          {/*  */}
          {/*  */}
          <ButtonCont>
            <Button style={{ borderRadius: "20px" }} variant="contained">
              Submit
            </Button>
          </ButtonCont>
          {/*  */}
        </FormContainer>
      </SignUpForm>
    </SignUpContainer>
  );
};
export default SignUp;
