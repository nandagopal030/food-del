import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nandagopal030_db_user:nanda123@cluster0.if7tpzf.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
}
