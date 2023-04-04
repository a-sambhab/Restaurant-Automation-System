const User = require("../model/user")

const addUser = async (req,res) => {
    const newuser = new User({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
        emp_id: req.body.emp_id,
    })
    const saveuser = await newuser.save();
    res.send(saveuser);
}

module.exports = addUser;