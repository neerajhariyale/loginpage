import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import DP from "../assets/dp.png";

const ProfileSection = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      setFullName(storedUserData.fullName);
      setEmail(storedUserData.email);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10  h-screen border-gray-300 bg-[#F7F8F9] border-1 shadow:sm rounded-md overflow-hidden  mb-4">
      <div className="bg-white px-6 py-4 ">
        <h2 className="text-lg font-semibold text-gray-800">
          Account Settings
        </h2>
      </div>

      <div className="flex items-start px-6 py-4 bg-[]">
        <div className="relative w-16 h-16 mr-4">
          <img
            src={DP}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full cursor-pointer">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-gray-900">
            {fullName || "JOHN DOE"}
          </h3>
          <p className="text-sm text-gray-500">
            {email || "johndoe@gmail.com"}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 text-sm text-black border-t border-dashed font-semibold border-gray-200">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      <div className="border-dashed border-1 border-gray-300"></div>
    </div>
  );
};

export default ProfileSection;
