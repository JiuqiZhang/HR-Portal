const bcrypt = require("bcryptjs");
const Employee = require('../models/Employee')
const HR = require('../models/HR')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

exports.signIn = async (req, res) => {
    try {
      //get data from database
      const user = await HR.findOne({ email: req.body.email}).exec();
      const employee = await Employee.findOne({ email: req.body.email}).exec();
      if(!user && !employee){
        return res.status(404).send("NOT FOUND.")
      }
      if (user){
        console.log(user)
        const comparedCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!comparedCorrect){
          return res.status(403).send("Incorrect Password") 
        }
          
        res.send({name:user.firstName + " " + user.lastName, email:user.email, identity:"HR"});
      }else if(employee){
        console.log(employee)
          const comparedCorrect = await bcrypt.compare(req.body.password, employee.password);
  
          if (!comparedCorrect){
            return res.status(403).send("Incorrect Password") 
          }
            
          res.send({name:employee.Name, email:employee.email, identity:"Employee"});
        
      }
      
     

    } catch (e) {
      console.error(e);
      return res.status(404).send({error: e})
    }
  };

