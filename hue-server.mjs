import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookieparser';
import crypto from 'crypto';
import session from 'express-session';

//Import functions
import attemptLogin from './attemptLogin.mjs';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentTime = new Date().toLocaleTimeString();
const app = express();
const PORT = 443;
const ipAddress = "0.0.0.0";
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));





// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/HUE-LOGINS', {  
})
.then(() => {
    console.log('Connected to MongoDB database');
}).catch((err) => {
    console.log('Error connecting to MongoDB database', err);
})
app.listen(PORT, ipAddress, () => {
    console.log(`Serveren kører på http://${ipAddress}:${PORT}, og blev åbnet kl. ${currentTime}`);
  });
  app.use((req, res, next) => {
    console.log()
    console.log(`Anmodning modtaget fra ${req.ip} på ${req.url} kl. ${new Date().toLocaleTimeString()}`);
    next();
  });


  


  app.get("/",  (req, res) => {
    res.redirect("/login/login.html")
    
  })

  app.get("/login", (req, res) => {
    console.log("Forespørgsel modtaget på /login");
    res.redirect("/login/login.html")
  })



  app.post("/attemptLogin", async (req, res) => {
    console.log("Forespørgsel modtaget på /attemptLogin");
    attemptLogin(req, res);


  })



  