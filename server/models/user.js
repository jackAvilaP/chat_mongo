import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  nickName: String,
  password: String,
  avatar: String,
});

export const User = mongoose.model("User", UserSchema);
