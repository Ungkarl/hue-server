import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Login = mongoose.model('Login', loginSchema);

const attemptLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Login.findOne({ username: username, password: password });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Forkert brugernavn eller adgangskode" });
        }
        else {
            return res.status(200).json({ message: "Login succesfuldt" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Der skete en fejl under login" });
    }
}

export default attemptLogin;
