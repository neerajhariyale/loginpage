import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-3/12 border-1 shadow:sm border-gray-200 rounded-md  flex  flex-col h-screen  justify-end  m-auto items-start mt-2  mb-2">
      <h1 className="text-3xl text-black font-bold ml-4 mb-2">
        Welcome to PopX
      </h1>
      <p className="text-xl text-gray ml-4 text-[#abaeae]">
        Lorem ipsum dolor sit amet,
      </p>
      <p className="text-xl text-gray ml-4 text-[#abaeae]">
        consectetor adipising elit,
      </p>

      <div className="w-full mt-7 ">
        {/* create account        */}
        <div
          className="w-11/12 ml-4 flex justify-center items-center h-10 rounded-md  text-center bg-[#6C25FF] hover:bg-[#642AF5] hover:text-white text-white cursor-pointer mb-3"
          onClick={() => navigate("/create-account")}
        >
          <p>Create Account</p>
        </div>

        {/* Signin button */}
        <div
          className="w-11/12 ml-4 flex justify-center items-center h-10 rounded-md  text-center bg-[#6C25FF] hover:bg-[#642AF5] text-white hover:text-white cursor-pointer  mb-4"
          onClick={() => navigate("/signin")}
        >
          <p>Already Registered? Login</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
