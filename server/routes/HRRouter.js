const HRRouter = require("express").Router();
const HRHiringController = require("../controllers/HRHiringController");

HRRouter.route("/generateToken")
  .post(HRHiringController.generateToken)



module.exports = HRRouter;