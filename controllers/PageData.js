const { SlideModel,QuizModel} = require("../models");

exports.InsertSlide = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const bodyData = req.body;

  console.log("req body : ", req.body);

  if (bodyData != null) {
    const InsertDetails = await SlideModel.create(bodyData).catch(errorHandler);
    return res.status(200).json({
      success: true,
      result: InsertDetails,
    });
  }
};

exports.InsertQuiz = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const bodyData = req.body;

  console.log("req body : ", req.body);

  if (bodyData != null) {
    const InsertDetails = await QuizModel.create(bodyData).catch(errorHandler);
    return res.status(200).json({
      success: true,
      result: InsertDetails,
    });
  }
};
