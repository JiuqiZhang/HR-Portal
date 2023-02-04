// const Info = require("../models/Info");

exports.post_file = async (req, res) => {
  try {
    const base64Image = req.body.image;
    const imageName = req.body.name;
    const type = req.body.type;
    let response = await uploadService.upload(imageName, base64Image);
    // res.send({link: response});
    // res.json();
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}
