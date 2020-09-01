const mongoose = require('mongoose')

var Admin = new mongoose.Schema({
    firstName: { type: String, default: "Anuj" },
    lastName: { type: String, default: "Dubey" },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, default: 12344 },
    status: { type: Boolean, required: true, default: true },
});

Admin = mongoose.model('admin', Admin)
module.exports = Admin

// Insert Admin Record by default....
const adminInsert = () => {
    Admin.find({}).then(async data => {
        if (data.length < 1) {
            await Admin.create({ email: "Himanshubhatia1996@gmail.com" })
            await Admin.create({ email: "aparna@gmail.com" })
            await Admin.create({ email: "abhay@gmail.com" })
            await Admin.create({ email: "anuj@gmail.com" })
            console.log("Super admin record has inserted")
        }
        else {
            console.log("Super admin record already inserted")
        }
    }).catch(err => {
        console.log("Error : Super admin record has inserted", err)
    })
}
adminInsert();

