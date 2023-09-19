import mongoose from "mongoose"


const databaseConection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_XLR)
        console.log("DB CONECTED");
    } catch (error) {
        console.log(error);
    }
}


export default databaseConection