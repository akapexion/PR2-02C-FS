import bcrypt from 'bcrypt';
import user from '../models/users.js';

const authController = {
    register: async (req, res) => {
        try{
            
            const { name, email, password } = req.body;

            const hashPassword = await bcrypt.hash(password, 10);

            await user.insertOne({user_name : name, user_password: hashPassword, user_email : email});

            res.send({message : "User Registered Successfully"});
            
        }
        catch(err){
            console.log(err);
        }
    }
}

export default authController;