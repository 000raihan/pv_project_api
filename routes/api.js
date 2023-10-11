const express = require("express");
const router = express.Router();

const User = require("../controllers/User");
const PageData = require("../controllers/PageData");
const FilterData = require("../controllers/GetDataFilter");

const chapterController = require("../controllers/ChapterController");

router.post("/v1/login", function (req, res, next) {
  User.Login(req, res, next);
});

router.get("/v1/user_details/:id", function (req, res, next) {
  User.UserDetails(req, res, next);
});

// ==========

router.post("/v1/create_chapter", function (req, res, next) {
  chapterController.createChapter(req, res, next);
});
router.get("/v1/get_all_chapters/:id", function (req, res, next) {
  chapterController.getAllChapters(req, res, next);
});

// -----------

router.put("/v1/update_chapter/instruction/:id", function (req, res, next) {
  chapterController.updateInstruction(req, res, next);
});
router.put("/v1/update_chapter/introduction/:id", function (req, res, next) {
  chapterController.updateIntroduction(req, res, next);
});
router.put("/v1/update_chapter/chapter1/:id", function (req, res, next) {
  chapterController.updateChapter1(req, res, next);
});

router.put("/v1/update_chapter/chapter2/:id", function (req, res, next) {
  chapterController.updateChapter2(req, res, next);
});
router.put("/v1/update_chapter/chapter3/:id", function (req, res, next) {
  chapterController.updateChapter3(req, res, next);
});
router.put("/v1/update_chapter/chapter4/:id", function (req, res, next) {
  chapterController.updateChapter4(req, res, next);
});
router.put("/v1/update_chapter/chapter5/:id", function (req, res, next) {
  chapterController.updateChapter5(req, res, next);
});
router.put("/v1/update_chapter/chapter6/:id", function (req, res, next) {
  chapterController.updateChapter6(req, res, next);
});


// ======= FILTER DATA

router.get("/v1/get_all_departments", function (req, res, next) {
  FilterData.getAllDepartments(req, res,next)
});
router.get("/v1/get_all_designations", function (req, res, next) {
  FilterData.getAllDesignations(req, res,next)
});
router.get("/v1/get_all_locations", function (req, res, next) {
  FilterData.getAllLocations(req, res,next)
});
router.get("/v1/get_all_units", function (req, res, next) {
  FilterData.getAllUnits(req, res,next)
});

//--Users
router.get("/v1/get_all_users", function (req, res, next) {
  FilterData.getAllUsers(req, res,next)
});



// ========result/

router.get("/v1/get_result/:id", function (req, res, next) {
  chapterController.getResult(req, res, next);
});


// router.post("/v1/insert_slide", function (req, res, next) {
//   PageData.InsertSlide(req, res, next);
// });

// router.post("/v1/insert_quiz", function (req, res, next) {
//   PageData.InsertQuiz(req, res, next);
// });

module.exports = router;
