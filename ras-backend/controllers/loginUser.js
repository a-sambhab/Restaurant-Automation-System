const User = require("../model/user")

const loginUser = async (req,res) => {
    try {
        if(!req.headers.name||!req.headers.password){
            throw "Username or Password not provided";
        }
        else{
            const fetchuser = await User.findOne({name: req.headers.name});
            if(!fetchuser){
                throw "User does not exist";
            }
            if(fetchuser.password===req.headers.password){
                fetchuser.loggedin = true;
                const saveuser = await fetchuser.save();
                res.status(200).send({
                    "message": "Logged In Successfully",
                    "user": {
                        name: saveuser.name,
                        role: saveuser.role,
                        emp_id: saveuser.emp_id,
                    },
                })
            }
            else{
                throw "Password Wrong"
            }
        }
    } catch (err) {
        res.status(203).send({
            "message": err
        })
    }
}

module.exports = loginUser;