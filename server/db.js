const mongoose = require ("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        process.env.DB = 'mongodb+srv://admin:hVgEfWaFTy9edHdy@signup-login.lllmbcy.mongodb.net/';
        mongoose.connect(process.env.DB, connectionParams);
        //mongoose.connect(process.env.DB , connectionParams);
        console.log("Connected succesfully to Database")
    } catch (error) {
        console.log(error);
        console.log("Connection failed to Database")
    }
}