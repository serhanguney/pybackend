const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user) {
    this.fullName = user.fullName;
    this.from = user.from;
    this.message = user.message;
    this.boat = user.boat;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "privateyachtingturkey@gmail.com",
        pass: "1.Pycharter",
      },
    });
  }
  async send() {
    const mailOptions = {
      from: this.from,
      to: "privateyachtingturkey@gmail.com",
      subject: `${this.boat} Inquiry from ${this.fullName}`,
      text: this.message,
    };
    await this.newTransport().sendMail(mailOptions, () =>
      console.log("email sent")
    );
  }
};
