import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true
    },
    profilePicture:{
        type: String,
        default: "https://www.bing.com/images/search?view=detailV2&ccid=bb%2fXdMh4&id=3AE736BB764A32BB796F6CD4DB623CA4C112C0FD&thid=OIP.bb_XdMh4HJXUE8qW_kDSZQHaGM&mediaurl=https%3a%2f%2fdakotaunlimited.com%2fwp-content%2fuploads%2f2016%2f02%2fblank-profile-picture-e1459432041757.png&exph=601&expw=719&q=Blank+Profile&simid=608026065406138855&FORM=IRPRST&ck=C947BEA4D280C8D08370B01FF5AC67BC&selectedIndex=14&itb=0"
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;