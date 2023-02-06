const HRRouter = require("express").Router();
const HRHiringController = require("../controllers/HRHiringController");
const HRSignInController = require("../controllers/HRSignInController");
const HRHousingController = require("../controllers/HRHousingController")
HRRouter.route("/generateToken")
  .post(HRHiringController.generateToken)

HRRouter.route("/signIn")
  .post(HRSignInController.signIn)
  
HRRouter.route("/postHousing")
  .post(HRHousingController.postHousing)
HRRouter.route("/allHousing")
  .get(HRHousingController.allHousing)
module.exports = HRRouter;