import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  // Handle Create Account button click
  const handleCreateAccount = () => {
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };

    //  localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);

    // ALERT
    alert("Account created and data stored in localStorage!");

    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setCompanyName("");
    setIsAgency("");
  };

  return (
    <div className="w-3/12 border-1 shadow:sm border-gray-200 rounded-md flex  flex-col min-h-screen  justify-start  m-auto items-start mt-2  mb-2 sm:flex-wrap">
      <h1 className="text-4xl text-black font-bold ml-4 mb-2 mt-6">
        Create your
        <br /> PopX account
      </h1>

      <Box className="flex flex-col space-y-4 gap-4 w-11/12 mx-auto mt-8">
        <TextField
          required
          id="outlined-disabled"
          label="Full Name"
          default="enter full name"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          sx={{
            "& label": {
              color: "#6C25FF",
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

        {/* Phone number */}
        <TextField
          required
          id="outlined-disabled"
          label="Phone number"
          placeholder="enter phone number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{
            "& label": {
              color: "#6C25FF",
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

        {/* Email */}
        <TextField
          required
          // id="email"
          id="outlined-disabled"
          label="Email Address"
          placeholder="enter email address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& label": {
              color: "#6C25FF",
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

        {/* password */}

        <TextField
          required
          id="password"
          label="Password"
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          sx={{
            "& label": {
              color: "#6C25FF",
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

        {/* company name */}
        <TextField
          id="outlined-disabled"
          label="Company Name"
          placeholder="enter company name"
          variant="outlined"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          sx={{
            "& label": {
              color: "#6C25FF",
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
      </Box>
      <div className="ml-4 mt-2">
        <p required>
          Are you an Agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex gap-2 mt-2">
          <div className="flex justify-between items-center">
            <input
              type="radio"
              name="agency"
              className="accent-[#6C25FF] mr-2 w-4 h-4 "
              value="Yes"
              checked={isAgency === "Yes"}
              onChange={() => setIsAgency("Yes")}
            />
            <label htmlFor="">Yes</label>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="agency"
              className="accent-[#6C25FF] mr-2 w-4 h-4"
              value="No"
              checked={isAgency === "No"}
              onChange={() => setIsAgency("No")}
            />
            <label htmlFor="">No</label>
          </div>
        </div>
      </div>

      <div
        className="w-11/12  flex justify-center items-center  m-auto h-10 rounded-md  text-center bg-[#642AF5] hover:bg-[#919191] text-white hover:text-white cursor-pointer  mb-4 "
        onClick={handleCreateAccount}
      >
        <p>Create Account</p>
      </div>
    </div>
  );
};

export default CreateAccount;
