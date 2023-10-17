const Contact = require("../models/ContactUs");

exports.contactus = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    console.log("Inside contact us ");
     

    const contactform = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    console.log(contactform);
    return res.status(200).json({
      success:true,
      contactform,
      message:"Contact Us Form Submitted Sucessfully. We will contact you soon",
    })
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"There is some error"
    })
  }
};
