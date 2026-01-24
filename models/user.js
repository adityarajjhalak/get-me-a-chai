import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },    
    email: {
    type: String,
    required: true,
  },    
  username: {
    type: String,},

    profilepic: {
    type: String},  
    
    coverpic: {
    type: String},  

    createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.User || mongoose.model("User", userSchema);