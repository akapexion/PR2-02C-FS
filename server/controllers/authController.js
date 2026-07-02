import bcrypt from 'bcrypt';
import user from '../models/users.js';

const authController = {
    register: async (req, res) => {
        try {

            const { name, email, password } = req.body;

            const hashPassword = await bcrypt.hash(password, 10);

            await user.insertOne({ user_name: name, user_password: hashPassword, user_email: email });

            res.send({ message: "User Registered Successfully" });

        }
        catch (err) {
            console.log(err);
        }
    },


    
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const registeredUser = await user.findOne({ user_email: email });
            if (registeredUser) {
                const matchPassword = await bcrypt.compare(password, registeredUser.user_password);

                if (matchPassword) {
                    res.send({ message: "User Logged in Successfully" });
                }
                else {
                    res.send({ message: "Invalid Credentials" });
                }
            }
            else {
                res.send({ message: "User don't exist" });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default authController;