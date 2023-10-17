import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";

const Information = () => {
  return (
    <div className="text bg-richblack-800 px-[40px] py-[10px] flex flex-col justify-center items-center ">
      <div className="mt-10">
        <h3 className="flex gap-2 items-center">
          <BsFillChatDotsFill /> Chat on us
        </h3>
        <p className="text-xs text-richblack-25">Our friendly team is here to help. @mail address</p>
      </div>
      <div className="mt-7">
        <h3 className="flex gap-2 items-center">
          <BsGlobeAmericas /> Visit Us
        </h3>
        <p className="text-xs text-richblack-25">
          Come and say hello at our office HQ. Here is the location/ address
        </p>
      </div>
      <div className="mt-7">
        <h3 className="flex gap-2 items-center">
          <MdWifiCalling3 />
          Call Us
        </h3>
        <p className="text-xs text-richblack-25">Mon - Fri From 8am to 5pm +123 456 7890</p>
      </div>
    </div>
  );
};

export default Information;
