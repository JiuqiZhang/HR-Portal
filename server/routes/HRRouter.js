const HRRouter = require("express").Router();
const HRHiringController = require("../controllers/HRHiringController");
const signInController = require("../controllers/signInController");
const HRHousingController = require("../controllers/HRHousingController")
HRRouter.route("/generateToken")
  .post(HRHiringController.generateToken)

HRRouter.route("/signIn")
  .post(signInController.signIn)
  
HRRouter.route("/postHousing")
  .post(HRHousingController.postHousing)
HRRouter.route("/allHousing")
  .get(HRHousingController.allHousing)
module.exports = HRRouter;