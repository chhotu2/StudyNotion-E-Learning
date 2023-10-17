import React from "react";
import ContactForm from "../../contactUsForm/ContactForm";

const ContactInformation = () => {
  return (
    <div className=" ">
      <div>
        <h1 className="text-white text-3xl">Got a Idea? We’ve got the skills. Let’s team up</h1>
        <p className="text-richblack-50 text-xs mt-5">
          Got a Idea? We’ve got the skills. Let’s team up Tall us more about
          yourself and what you’re got in mind.
        </p>
      </div>

      <div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactInformation;
