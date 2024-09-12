const router = require("express").Router();
const { contactMail } = require("../controllers/contactController");

router.post("/contact/mail", contactMail);

module.exports = router;
