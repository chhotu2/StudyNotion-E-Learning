const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  firstName: {

  },
  lastName: {

  },
  email: {

  },
  phone: {

  },
  message: {
    
  },
});

module.exports = mongoose.model("contact", contactusSchema);
