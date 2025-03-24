import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // HandlelOGIN
  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      setError("No account found. Please sign up first!");
      return;
    }

    if (
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      setError("");
      navigate("/profile-section");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-3/12 border-1 shadow:sm border-gray-200 rounded-md flex  flex-col min-h-screen  justify-start  m-auto items-start mt-2  mb-2 sm:flex-wrap">
      <h1 className="text-4xl text-black font-bold ml-4 mb-2 mt-8">
        Sign In to your <br /> PopX account
      </h1>

      <p className="text-xl text-gray ml-4 text-[#abaeae] mb-2">
        Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
      </p>

      <Box className="flex flex-col space-y-4 gap-4 w-11/12 mx-auto mt-8">
        <TextField
          required
          // id="email"
          id="outlined-disabled"
          label="Email Address"
          placeholder="Enter email address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& label": {
              color: "#CBCBCB",
            },
            "& label.Mui-focused": {
              color: "#6C25FF",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#CBCBCB",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#CBCBCB",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#CBCBCB",
                borderWidth: "2px",
              },
            },
          }}
        />

        <TextField
          required
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& label": {
              color: "#CBCBCB",
            },
            "& label.Mui-focused": {
              color: "#6C25FF",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#CBCBCB",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#CBCBCB",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#CBCBCB",
                borderWidth: "2px",
              },
            },
          }}
        />

        <div
          className="w-full flex justify-center items-center h-10 rounded-md  text-center bg-[#CBCBCB] hover:bg-[#642AF5] text-white hover:text-white cursor-pointer  mb-4 "
          onClick={handleLogin}
        >
          <p>Login</p>
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
