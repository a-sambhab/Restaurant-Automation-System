const User = require("../model/user")

const loginUser = async (req,res) => {
    const fetchuser = await User.findOne({name: req.body.name});
    if(!fetchuser){
        res.send({
            "status": 201,
            "message": "user does not exist"
        })
    }
    if(fetchuser.password===req.body.password){
        fetchuser.loggedin = true;
        const saveuser = await fetchuser.save();
        res.send({
            "status": 200,
            "message": "logged in successfully",
            "user": saveuser
        })
    }
    else{
        res.send({
            "status": 201,
            "message": "password wrong"
        })
    }
}

module.exports = loginUser;