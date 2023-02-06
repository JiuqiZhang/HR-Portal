const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require('../models/Employee')
const dotenv = require('dotenv');
dotenv.config({ path: "../.env" });

exports.signUp = async (req, res) => {
    try {
      //get data from database
      const token = req.body.token
      const decoded_real_jwt = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded_real_jwt)
      //if token is not expired
      if (decoded_real_jwt){
        const password = await bcrypt.hash(req.body.password, Number(process.env.SALT));
        if (decoded_real_jwt.email != req.body.email){
            return res.status(401).json("Email doesn't match to the invited one in the system.")
        }
        const user = await Employee.create({ email: req.body.email, password: password, Name:decoded_real_jwt.name});
        console.log(user)
        return res.json(user)
        
      }
      else{
        return res.status(401).send("Token expired.")
      }
      
      
      

    } catch (e) {
      console.error(e);
      return res.status(401).send("Already registered. Go to 'http://localhost:3000/login' ")
    }
  };

//   exports.signIn = async (req, res) => {
//     try {
//       //get data from database
//       const user = await Employee.findOne({ email: req.body.email}).exec();
//       if(!user){
//         return res.status(404).send("NOT FOUND.")
//       }
//       const comparedCorrect = await bcrypt.compare(req.body.password, user.password);

//       if (!comparedCorrect){
//         return res.status(403).send("Incorrect Password") 
//       }
        
//       res.send({name:user.Name, email:user.email});
     

//     } catch (e) {
//       console.error(e);
//       return res.status(404).send({error: e})
//     }
//   };

