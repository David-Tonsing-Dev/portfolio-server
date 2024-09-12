const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const contactMail = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    if (!email || !message)
      return res.status(400).json({
        status: false,
        message: "Please fill in the email and message fields",
      });
    const nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail(
      {
        from: email,
        to: "sortejanvi11@gmail.com",
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} [${email}]:\n\n${message}`,
      },
      (err, info) => {
        if (err) console.log("Error: ", err);
      }
    );

    return res
      .status(200)
      .json({ status: true, message: "Email sent successfully" });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Server error, try again later",
      error: err.message,
    });
  }
};

module.exports = { contactMail };
