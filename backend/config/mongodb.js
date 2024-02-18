import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
        dbName :"fashion-matrix"
    });
    console.log("mongodb connect successfully")
  } catch (error) {
    console.log("Mongodb connection error", error);
  }
};
