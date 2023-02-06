const EmployeeProfileRouter = require("express").Router();
const EmployeeProfileController = require("../controllers/EmployeeProfileController");
const EmployeeLoginController = require("../controllers/EmployeeLoginController")
EmployeeProfileRouter.route("")
  .get(EmployeeProfileController.get_all_profiles)

EmployeeProfileRouter.route("/profile")
  .get(EmployeeProfileController.get_individual_profile)

EmployeeProfileRouter.route("/search")
  .get(EmployeeProfileController.search_by_name);
EmployeeProfileRouter.route("/signUp")
  .post(EmployeeLoginController.signUp)
module.exports = EmployeeProfileRouter;