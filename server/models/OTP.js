const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});


// Define a function to send emails
async function sendVerificationEmail(email, otp) {
  // Create a transporter to send emails

  // Define the email options

  // Send the email
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      emailTemplate(otp),
    );
    console.log("Email sent successfully: ", mailResponse.response);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}


// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
  console.log("New document saved to database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;

// jb koi user signup krne aaya -> usne details fill ki -> uske email pr otp gya -> abhi tk uss user ki entry DB me create nhi hui hai -> woh user otp enter krega -> then signup button ko click krega -> ab signup button ko click krne ke baad uss user ki entry DB me create hogi
// iska mtlb hai DB me entry create hone se phle mtlb DB me document bn'ne se phle OTP bhejna pdega mail pr

// iska mtlb hai entry create krne se phle email send krna pdega -> that means yha pr pre-middleware ka use krna hai
// mtlb jo OTP hum send krenge mail pr uska code hum as a pre middleware likhenge --> aur woh pre middleware OTP ke schema ke niche aur OTP ke model ke upr likha jayega
// pre middleware me humko mail send krne ka code likhna hai

// Mongoose Pre/Post Middleware (inside Schema file) -->
// These are written directly in the model/schema file before creating the model
