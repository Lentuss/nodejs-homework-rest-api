const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, "Set name for contact"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    phone: { type: String, required: [true, "Enter the phone number, please"] },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = Contact;
