const VisaUploadRouter = require("express").Router();
const VisaUploadController = require("../controllers/VisaUploadController");

VisaUploadRouter.route("")
  .post(VisaUploadController.post_file);

module.exports = VisaUploadRouter;