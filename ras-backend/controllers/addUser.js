const User = require("../model/user")

const addUser = async (req,res) => {
    try {
        if(!req.body.name||!req.body.password){
            throw "Username or Password not provided";
        }
        else{
            const fetchuser = await User.findOne({name: req.body.name});
            if(fetchuser){
                throw "User already exists"
            }
            else{
                const newuser = new User({
                    name: req.body.name,
                    password: req.body.password,
                    role: req.body.role,
                    emp_id: req.body.emp_id,
                })
                const saveuser = await newuser.save();
                res.status(200).send(saveuser);
            }
        }
    } catch (error) {
        res.status(201).send({
            "message": error
        })
    }
}

module.exports = addUser;