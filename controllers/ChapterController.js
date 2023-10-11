const {
  QuizModel,
  InstructionModel,
  IntroductionModel,
  Chapter1Model,
  Chapter2Model,
  Chapter3Model,
  Chapter4Model,
  Chapter5Model,
  Chapter6Model,
} = require("../models");

const createChapterUtil = async (chapterName, bodyData) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  if (chapterName == "instruction") {
    const chapter = await InstructionModel.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return;
    // return await InstructionModel.create(bodyData).catch(errorHandler);
  } else if (chapterName == "introduction") {
    const chapter = await Chapter1Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await IntroductionModel.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter1") {
    const chapter = await Chapter1Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter1Model.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter2") {
    const chapter = await Chapter2Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter2Model.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter3") {
    const chapter = await Chapter3Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter3Model.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter4") {
    const chapter = await Chapter4Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter4Model.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter5") {
    const chapter = await Chapter5Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter5Model.create(bodyData).catch(errorHandler);
  } else if (chapterName == "chapter6") {
    const chapter = await Chapter6Model.findOne({
      where: { user_id: bodyData?.user_id },
    });
    if (chapter) {
      return null;
    }
    return await Chapter6Model.create(bodyData).catch(errorHandler);
  }
};

const insertQuiz = async (bodyData) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  if (bodyData != null) {
    return (InsertDetails = await QuizModel.create(bodyData).catch(
      errorHandler
    ));
  }
};

exports.createChapter = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  console.log("user id is : ", req.body.user_id);

  const instruction = await InstructionModel.findOne({
    where: { user_id: req?.body?.user_id },
  });

  let chapterCreated = false
  console.log("chapter created status  ||||||||:", chapterCreated)

  if (instruction || chapterCreated) {
    return res.status(204).json({
      success: false,
      message: "Chapter already created",
    });
  } else {
    console.log("found instruction is : ", instruction);
    const createdChapter = await InstructionModel.create({
      user_id: req.body.user_id,
    });

    console.log("chapter created ||||||||||||||||||||||||||")
    chapterCreated = true

    if (createdChapter) {
      return res.status(200).json({
        success: true,
        result: createdChapter,
      });
    }
    return res.status(204).json({
      success: false,
      message: "Chapter isn't created",
    });
  }

  // const createdChapter = ""
};

exports.getAllChapters = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };
  const userId = req.params.id;

  const instruction = await InstructionModel.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (instruction) {
    instruction.allSlideDone = instruction?.slide1 && instruction?.slide2;
  }

  const introduction = await IntroductionModel.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (introduction) {
    introduction.allSlideDone = instruction?.slide1;
  }

  const chapter1 = await Chapter1Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter1) {
    chapter1.allSlideDone =
      chapter1?.slide1 &&
      chapter1?.slide2 &&
      chapter1?.slide3 &&
      chapter1?.slide4 &&
      chapter1?.slide5 &&
      chapter1?.slide6 &&
      chapter1?.slide7 &&
      chapter1?.slide8 &&
      chapter1?.slide9;
  }
  if (chapter1) {
    chapter1.allQuizStatus =
      chapter1?.quiz1 && chapter1?.quiz2 && chapter1?.quiz3;
  }

  const chapter2 = await Chapter2Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter2) {
    chapter2.allSlideDone =
      chapter2?.slide1 &&
      chapter2?.slide2 &&
      chapter2?.slide3 &&
      chapter2?.slide4 &&
      chapter2?.slide5 &&
      chapter2?.slide6 &&
      chapter2?.slide7 &&
      chapter2?.slide8 &&
      chapter2?.slide9 &&
      chapter2?.slide10 &&
      chapter2?.slide11 &&
      chapter2?.slide12 &&
      chapter2?.slide13 &&
      chapter2?.slide14 &&
      chapter2?.slide15 &&
      chapter2?.slide16 &&
      chapter2?.slide17 &&
      chapter2?.slide18;
  }
  if (chapter2) {
    chapter2.allQuizStatus =
      chapter2?.quiz1 && chapter2?.quiz2 && chapter2?.quiz3;
  }

  const chapter3 = await Chapter3Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter3) {
    chapter3.allSlideDone =
      chapter3?.slide1 &&
      chapter3?.slide2 &&
      chapter3?.slide3 &&
      chapter3?.slide4 &&
      chapter3?.slide5 &&
      chapter3?.slide6 &&
      chapter3?.slide7 &&
      chapter3?.slide8 &&
      chapter3?.slide9 &&
      chapter2?.slide10 &&
      chapter3?.slide11 &&
      chapter3?.slide12;
  }
  if (chapter3) {
    chapter3.allQuizStatus =
      chapter3?.quiz1 && chapter3?.quiz2 && chapter3?.quiz3 && chapter3?.quiz4;
  }

  const chapter4 = await Chapter4Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter4) {
    chapter4.allSlideDone = chapter4?.slide1 && chapter4?.slide2;
  }

  if (chapter4) {
    chapter4.allQuizStatus = chapter4?.quiz1;
  }

  const chapter5 = await Chapter5Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter5) {
    chapter5.allSlideDone =
      chapter5?.slide1 && chapter5?.slide2 && chapter5?.slide3;
  }
  if (chapter5) {
    chapter5.allQuizStatus = chapter5?.quiz1 && chapter5?.quiz2;
  }

  const chapter6 = await Chapter6Model.findOne({
    where: { user_id: userId },
    raw: true,
  }).catch(errorHandler);

  if (chapter6) {
    chapter6.allQuizStatus = chapter6?.quiz1 && chapter6?.quiz2;
  }

  return res.status(200).json({
    success: true,
    result: {
      instruction: instruction,
      introduction: introduction,
      chapter1: chapter1,
      chapter2: chapter2,
      chapter3: chapter3,
      chapter4: chapter4,
      chapter5: chapter5,
      chapter6: chapter6,
    },
  });
};

// =======UPDATE CHAPTER===========

exports.updateInstruction = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const userId = req.params?.id;

  const reqBody = req?.body;

  const slide_name = reqBody?.slide_name;
  console.log("slide name is ==========: ", slide_name);
  const data = await InstructionModel.update(
    { [slide_name]: reqBody?.slide_status },
    {
      where: { user_id: userId },
    }
  ).catch(errorHandler);

  const insData = await InstructionModel.findOne({
    where: { user_id: userId },
    raw: true,
  });

  if (insData?.slide1 == 1 && insData?.slide2 == 1) {
    await createChapterUtil("introduction", { user_id: userId });
  }

  if (data === null) {
    return res.status(200).json({
      success: false,
      message: "Chapter 1 isn't updated",
    });
  } else {
    return res.status(200).json({
      success: true,
      result: data,
    });
  }
};
exports.updateIntroduction = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };
  const userId = req.params?.id;

  const reqBody = req?.body;

  const slide_name = reqBody?.slide_name;
  const data = await IntroductionModel.update(
    { [slide_name]: reqBody?.slide_status },
    {
      where: { user_id: userId },
    }
  ).catch(errorHandler);

  const insData = await IntroductionModel.findOne({
    where: { user_id: userId },
    raw: true,
  });

  if (insData?.slide1 == 1) {
    await createChapterUtil("chapter1", { user_id: userId });
  }

  if (data === null) {
    return res.status(200).json({
      success: false,
      message: "Chapter 1 isn't updated",
    });
  } else {
    return res.status(200).json({
      success: true,
      result: data,
    });
  }
};

exports.updateChapter1 = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };
  const userId = req.params?.id;

  const reqBody = req?.body;

  if (reqBody?.sectionType == "slide") {
    const slide_name = reqBody?.slide_name;
    const data = await Chapter1Model.update(
      { [slide_name]: reqBody?.slide_status },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    if (data === null) {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: data,
      });
    }
  } else {
    const qData = await insertQuiz(reqBody?.quiz_data);
    const quiz_name = reqBody?.quiz_name;
    if (qData) {
      const [data] = await Chapter1Model.update(
        { [quiz_name]: reqBody?.quiz_status },
        {
          where: { user_id: userId },
        }
      ).catch(errorHandler);

      if (data > 0) {
        const updatedData = await Chapter1Model.findOne({
          where: { user_id: userId },
          raw: true,
        });

        console.log("data is : ", updatedData);

        if (
          updatedData?.quiz1 == 1 &&
          updatedData?.quiz2 == 1 &&
          updatedData?.quiz3 == 1
        ) {
          const getAllAns = await QuizModel.findAll({
            where: { user_id: userId, chapter: "chapter1" },
            raw: true,
          });

          const reducedAns = getAllAns.reduce(function (
            accumulator,
            currentValue
          ) {
            return Number(accumulator) + Number(currentValue?.ans_status);
          },
          0);

          if (reducedAns >= 2) {
            await createChapterUtil("chapter2", { user_id: userId });
            return res.status(200).json({
              success: true,
              result: { message: "Your successfully submitted chapter 1" },
            });
          } else {
            const deletedQuiz = await QuizModel.destroy({
              where: { user_id: userId, chapter: "chapter1" },
              raw: true,
            });
            const [data] = await Chapter1Model.update(
              { quiz1: 0, quiz2: 0, quiz3: 0 },
              {
                where: { user_id: userId },
              }
            ).catch(errorHandler);
            console.log("deleted quiz is : ", deletedQuiz);

            return res.status(200).json({
              success: true,
              result: { message: "Everthing is cleared" },
            });
          }

          // console.log("reduced ans is : ", reducedAns)
        }
        return res.status(200).json({
          success: true,
          result: "Your ans submitted",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Chapter 1 isn't updated",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    }
  }
};

exports.updateChapter2 = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: JSON.stringify(err),
    });
  };

  const userId = req.params?.id;

  const reqBody = req?.body;

  if (reqBody?.sectionType == "slide") {
    const slide_name = reqBody?.slide_name;
    const data = await Chapter2Model.update(
      { [slide_name]: reqBody?.slide_status },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    if (data === null) {
      return res.status(200).json({
        success: false,
        message: "Chapter 2 isn't updated",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: data,
      });
    }
  } else {
    const qData = await insertQuiz(reqBody?.quiz_data);
    const quiz_name = reqBody?.quiz_name;
    if (qData) {
      const [data] = await Chapter2Model.update(
        { [quiz_name]: reqBody?.quiz_status },
        {
          where: { user_id: userId },
        }
      ).catch(errorHandler);

      if (data > 0) {
        const updatedData = await Chapter2Model.findOne({
          where: { user_id: userId },
          raw: true,
        });

        console.log("data is : ", updatedData);

        if (
          updatedData?.quiz1 == 1 &&
          updatedData?.quiz2 == 1 &&
          updatedData?.quiz3 == 1
        ) {
          const getAllAns = await QuizModel.findAll({
            where: { user_id: userId, chapter: "chapter2" },
            raw: true,
          });

          const reducedAns = getAllAns.reduce(function (
            accumulator,
            currentValue
          ) {
            return Number(accumulator) + Number(currentValue?.ans_status);
          },
          0);

          if (reducedAns >= 2) {
            await createChapterUtil("chapter3", { user_id: userId });
            return res.status(200).json({
              success: true,
              result: { message: "Your successfully submitted chapter 1" },
            });
          } else {
            const deletedQuiz = await QuizModel.destroy({
              where: { user_id: userId, chapter: "chapter2" },
              raw: true,
            });
            const [data] = await Chapter2Model.update(
              { quiz1: 0, quiz2: 0, quiz3: 0 },
              {
                where: { user_id: userId },
              }
            ).catch(errorHandler);
            console.log("deleted quiz is : ", deletedQuiz);

            return res.status(200).json({
              success: true,
              result: { message: "Everthing is cleared" },
            });
          }

          // console.log("reduced ans is : ", reducedAns)
        }
        return res.status(200).json({
          success: true,
          result: "Your ans submitted",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Chapter 1 isn't updated",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 2 isn't updated",
      });
    }
  }
};

exports.updateChapter3 = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const userId = req.params?.id;

  const reqBody = req?.body;

  if (reqBody?.sectionType == "slide") {
    const slide_name = reqBody?.slide_name;
    const data = await Chapter3Model.update(
      { [slide_name]: reqBody?.slide_status },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    if (data === null) {
      return res.status(200).json({
        success: false,
        message: "Chapter 3 isn't updated",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: data,
      });
    }
  } else {
    const qData = await insertQuiz(reqBody?.quiz_data);
    const quiz_name = reqBody?.quiz_name;
    if (qData) {
      const [data] = await Chapter3Model.update(
        { [quiz_name]: reqBody?.quiz_status },
        {
          where: { user_id: userId },
        }
      ).catch(errorHandler);

      if (data > 0) {
        const updatedData = await Chapter3Model.findOne({
          where: { user_id: userId },
          raw: true,
        });

        console.log("data is : ", updatedData);

        if (
          updatedData?.quiz1 == 1 &&
          updatedData?.quiz2 == 1 &&
          updatedData?.quiz3 == 1 &&
          updatedData?.quiz4 == 1
        ) {
          const getAllAns = await QuizModel.findAll({
            where: { user_id: userId, chapter: "chapter3" },
            raw: true,
          });

          const reducedAns = getAllAns.reduce(function (
            accumulator,
            currentValue
          ) {
            return Number(accumulator) + Number(currentValue?.ans_status);
          },
          0);

          if (reducedAns >= 2) {
            await createChapterUtil("chapter4", { user_id: userId });
            return res.status(200).json({
              success: true,
              result: { message: "Your successfully submitted chapter 1" },
            });
          } else {
            const deletedQuiz = await QuizModel.destroy({
              where: { user_id: userId, chapter: "chapter3" },
              raw: true,
            });
            const [data] = await Chapter3Model.update(
              { quiz1: 0, quiz2: 0, quiz3: 0, quiz4: 0 },
              {
                where: { user_id: userId },
              }
            ).catch(errorHandler);

            console.log("deleted quiz is : ", deletedQuiz);

            return res.status(200).json({
              success: true,
              result: { message: "Everthing is cleared" },
            });
          }

          // console.log("reduced ans is : ", reducedAns)
        }
        return res.status(200).json({
          success: true,
          result: "Your ans submitted",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Chapter 1 isn't updated",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    }
  }
};
exports.updateChapter4 = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const userId = req.params?.id;

  const reqBody = req?.body;

  if (reqBody?.sectionType == "slide") {
    const slide_name = reqBody?.slide_name;
    const data = await Chapter4Model.update(
      { [slide_name]: reqBody?.slide_status },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    if (data === null) {
      return res.status(200).json({
        success: false,
        message: "Chapter 4 isn't updated",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: data,
      });
    }
  } else {
    const qData = await insertQuiz(reqBody?.quiz_data);
    const quiz_name = reqBody?.quiz_name;
    if (qData) {
      const [data] = await Chapter4Model.update(
        { [quiz_name]: reqBody?.quiz_status },
        {
          where: { user_id: userId },
        }
      ).catch(errorHandler);

      if (data > 0) {
        const updatedData = await Chapter4Model.findOne({
          where: { user_id: userId },
          raw: true,
        });

        console.log("data is : ", updatedData);

        if (updatedData?.quiz1 == 1) {
          const getAllAns = await QuizModel.findAll({
            where: { user_id: userId, chapter: "chapter4" },
            raw: true,
          });

          const reducedAns = getAllAns.reduce(function (
            accumulator,
            currentValue
          ) {
            return Number(accumulator) + Number(currentValue?.ans_status);
          },
          0);

          if (reducedAns >= 1) {
            await createChapterUtil("chapter5", { user_id: userId });
            return res.status(200).json({
              success: true,
              result: { message: "Your successfully submitted chapter 1" },
            });
          } else {
            const deletedQuiz = await QuizModel.destroy({
              where: { user_id: userId, chapter: "chapter4" },
              raw: true,
            });
            const [data] = await Chapter4Model.update(
              { quiz1: 0 },
              {
                where: { user_id: userId },
              }
            ).catch(errorHandler);

            console.log("deleted quiz is : ", deletedQuiz);

            return res.status(200).json({
              success: true,
              result: { message: "Everthing is cleared" },
            });
          }

          // console.log("reduced ans is : ", reducedAns)
        }
        return res.status(200).json({
          success: true,
          result: "Your ans submitted",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Chapter 1 isn't updated",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    }
  }
};
exports.updateChapter5 = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };
  const userId = req.params?.id;

  const reqBody = req?.body;

  if (reqBody?.sectionType == "slide") {
    const slide_name = reqBody?.slide_name;
    const data = await Chapter5Model.update(
      { [slide_name]: reqBody?.slide_status },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    if (data === null) {
      return res.status(200).json({
        success: false,
        message: "Chapter 5 isn't updated",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: data,
      });
    }
  } else {
    const qData = await insertQuiz(reqBody?.quiz_data);
    const quiz_name = reqBody?.quiz_name;
    if (qData) {
      const [data] = await Chapter5Model.update(
        { [quiz_name]: reqBody?.quiz_status },
        {
          where: { user_id: userId },
        }
      ).catch(errorHandler);

      if (data > 0) {
        const updatedData = await Chapter5Model.findOne({
          where: { user_id: userId },
          raw: true,
        });

        console.log("data is : ", updatedData);

        if (updatedData?.quiz1 == 1 && updatedData?.quiz2 == 1) {
          const getAllAns = await QuizModel.findAll({
            where: { user_id: userId, chapter: "chapter5" },
            raw: true,
          });

          const reducedAns = getAllAns.reduce(function (
            accumulator,
            currentValue
          ) {
            return Number(accumulator) + Number(currentValue?.ans_status);
          },
          0);

          if (reducedAns >= 1) {
            await createChapterUtil("chapter6", { user_id: userId });
            return res.status(200).json({
              success: true,
              result: { message: "Your successfully submitted chapter 1" },
            });
          } else {
            const deletedQuiz = await QuizModel.destroy({
              where: { user_id: userId, chapter: "chapter5" },
              raw: true,
            });
            const [data] = await Chapter5Model.update(
              { quiz1: 0, quiz2: 0 },
              {
                where: { user_id: userId },
              }
            ).catch(errorHandler);

            console.log("deleted quiz is : ", deletedQuiz);

            return res.status(200).json({
              success: true,
              result: { message: "Everthing is cleared" },
            });
          }

          // console.log("reduced ans is : ", reducedAns)
        }
        return res.status(200).json({
          success: true,
          result: "Your ans submitted",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Chapter 1 isn't updated",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    }
  }
};
exports.updateChapter6 = async (req, res, next) => {
  const errorHandler = (err) => {
    console.log("error is : ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  };
  const userId = req.params?.id;

  const reqBody = req?.body;

  const qData = await insertQuiz(reqBody?.quiz_data);
  const quiz_name = reqBody?.quiz_name;
  console.log("quiz name is : ", quiz_name);
  if (qData) {
    const [data] = await Chapter6Model.update(
      { [quiz_name]: 1 },
      {
        where: { user_id: userId },
      }
    ).catch(errorHandler);

    console.log("data is : ", data);
    if (data > 0) {
      const updatedData = await Chapter6Model.findOne({
        where: { user_id: userId },
        raw: true,
      });

      if (updatedData?.quiz1 == 1 && updatedData?.quiz2 == 1) {
        const getAllAns = await QuizModel.findAll({
          where: { user_id: userId, chapter: "chapter5" },
          raw: true,
        });

        const reducedAns = getAllAns.reduce(function (
          accumulator,
          currentValue
        ) {
          return Number(accumulator) + Number(currentValue?.ans_status);
        },
        0);

        if (reducedAns >= 1) {
          // await createChapterUtil("chapter6", { user_id: userId });
          return res.status(200).json({
            success: true,
            result: { message: "Your successfully submitted chapter 1" },
          });
        } else {
          const deletedQuiz = await QuizModel.destroy({
            where: { user_id: userId, chapter: "chapter5" },
            raw: true,
          });
          const [data] = await Chapter6Model.update(
            { quiz1: 0, quiz2: 0 },
            {
              where: { user_id: userId },
            }
          ).catch(errorHandler);

          console.log("deleted quiz is : ", deletedQuiz);

          return res.status(200).json({
            success: true,
            result: { message: "Everthing is cleared" },
          });
        }

        // console.log("reduced ans is : ", reducedAns)
      }
      return res.status(200).json({
        success: true,
        result: "Your ans submitted",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Chapter 1 isn't updated",
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      message: "Chapter 1 isn't updated",
    });
  }
};

exports.getResult = async (req, res, next) => {
  const errorHandler = (err) => {
    console.log("error is : ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  const userId = req.params.id;

  const getAllAns = await QuizModel.findAll({
    where: { user_id: userId },
    raw: true,
  });

  // 22

  const correctAns = getAllAns.filter((ans) => ans.ans_status == 1);

  const total = getAllAns.length;
  const value = correctAns.length;

  console.log("total is  : ", total);
  console.log("value is : ", value);

  const result = (value / total) * 100;

  console.log("result is : ", Math.round(result) + "%");

  // console.log('reult is  : ', 10)

  res.status(200).json({
    success: true,
    result: result ?  result?.toFixed(2) : null,
  });
};
