const express = require("express")
const router = express.Router()

const {
    contactus
}=require("../controllers/Contact")

router.post("/reach/contact",contactus);

module.exports = router;