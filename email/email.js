const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
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
    // const html = pug.renderFile(`${__dirname}/inquiry.pug`, {
    //   firstName: this.firstName,
    //   lastName: this.lastName,
    //   message: this.message,
    // });
    const mailOptions = {
      from: this.from,
      to: "privateyachtingturkey@gmail.com",
      subject: `${this.boat} Inquiry from ${this.firstName} ${this.lastName}`,
      text: this.message,
    };
    await this.newTransport().sendMail(mailOptions, () =>
      console.log("email sent")
    );
  }
};
