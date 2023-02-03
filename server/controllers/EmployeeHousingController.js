const Report = require("../models/Report");
const Comment = require("../models/Comment");
const creator = "Jane"; TODO:

exports.get_housing_details = async (req, res) => {
  try {
    const reports = await Report.find({ creator: creator });
    res.json(reports);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

exports.post_report = async (req, res) => {
  try {
    const report = new Report({
      ...req.body,
      timestamp: new Date().toISOString()
    });
    await report.save();
    const reports = await Report.find({});
    res.json(reports);
    // res.redirect("/");
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

// reportId "63dc357e44007c73daac419c" employee_housing/comment?report_id=63dc357e44007c73daac419c
exports.get_comment = async (req, res) => {
  try {
    const reportId = req.query.report_id; 
    // console.log(reportId);
    const report = await Report.find({ _id: reportId });
    const comment = report.comment;
    res.json(comment);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

exports.post_comment = async (req, res) => {
  try {
    const reportId = req.query.report_id;
    const report = await Report.findOne({ _id: reportId });
    const comment = new Comment({
      ...req.body,
      timestamp: new Date().toISOString()
    });
    await comment.save();
    await Report.findByIdAndUpdate(reportId, { 
      comment : [...report.comment, comment] 
    });
    const comments = await Comment.find({});
    res.json(comments);

  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

//commentId 63dc4c268646761ad6b23c7d     employee_housing/comment?comment_id=63dc4c268646761ad6b23c7d
exports.put_comment = async (req, res) => {
  try {
    const commentId = req.query.comment_id;
    const comment = await Comment.findOne({ _id: commentId });
    await Comment.findByIdAndUpdate(commentId, { 
      content: req.body.content,
      timestamp: new Date().toISOString()
    });
    res.json(comment);
    
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}