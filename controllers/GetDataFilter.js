const { sequelize, UserListModel, QuizModel } = require("../models");

exports.getAllDepartments = async (req, res, next) => {
  const qureyString = `SELECT DISTINCT department FROM user_list WHERE department IS NOT NULL`;

  const allDepartments = await sequelize
    .query(qureyString)
    .then((products) => {
      return products;
    })
    .catch((error) => {
      console.error("Error retrieving active products for the shop:", error);
      throw new Error("Error retrieving active products for the shop:", error);
    });

  // // const products = await sequelize.query();

  // console.log("products is : ", allProducts);

  const response = {
    code: 200,
    data: allDepartments[0],
  };

  //   console.log("response is : ", response);

  return res.status(200).json(response);
};

exports.getAllDesignations = async (req, res, next) => {
  const qureyString = `SELECT DISTINCT designation FROM user_list WHERE designation IS NOT NULL`;

  const allDesignations = await sequelize
    .query(qureyString)
    .then((designations) => {
      return designations;
    })
    .catch((error) => {
      console.error("Error retrieving designations:", error);
      throw new Error("Error retrieving designations:", error);
    });

  // // const products = await sequelize.query();

  // console.log("products is : ", allProducts);

  const response = {
    code: 200,
    data: allDesignations[0],
  };

  //   console.log("response is : ", response);

  return res.status(200).json(response);
};

exports.getAllLocations = async (req, res, next) => {
  const qureyString = `SELECT DISTINCT location FROM user_list WHERE location IS NOT NULL AND location != ""`;

  const allLocations = await sequelize
    .query(qureyString)
    .then((lcoations) => {
      return lcoations;
    })
    .catch((error) => {
      console.error("Error retrieving locations:", error);
      throw new Error("Error retrieving locations:", error);
    });

  // // const products = await sequelize.query();

  // console.log("products is : ", allProducts);

  const response = {
    code: 200,
    data: allLocations[0],
  };

  //   console.log("response is : ", response);

  return res.status(200).json(response);
};

exports.getAllUnits = async (req, res, next) => {
  const qureyString = `SELECT DISTINCT unit FROM user_list WHERE unit IS NOT NULL`;

  const allUnits = await sequelize
    .query(qureyString)
    .then((units) => {
      return units;
    })
    .catch((error) => {
      console.error("Error retrieving units:", error);
      throw new Error("Error retrieving units:", error);
    });

  // // const products = await sequelize.query();

  // console.log("products is : ", allProducts);

  const response = {
    code: 200,
    data: allUnits[0],
  };

  //   console.log("response is : ", response);

  return res.status(200).json(response);
};

// ========================USERS====================

const getResult = async (id) => {
  const userId = id;

  const getAllAns = await QuizModel.findAll({
    where: { user_id: userId },
    raw: true,
  });

  // 22

  const correctAns = getAllAns.filter((ans) => ans.ans_status == 1);

  const total = getAllAns.length;
  const value = correctAns.length;

  // console.log("total is  : ", total);
  // console.log("value is : ", value);

  const result = (Number(value || 0) / Number(total || 0)) * 100;

  console.log("result is : ", Math.round(result) + "%");

  return result ? result?.toFixed(2) : null;
};

exports.getAllUsers = async (req, res, next) => {
  const department = req?.query?.department;
  const designation = req?.query?.designation;
  const location = req?.query?.location;
  const unit = req?.query?.unit;

  const newQuery = Object.keys(req?.query);
  const newQueryValues = Object.values(req?.query);

  console.log("req query is :", newQuery);
  console.log("req query values is : ", newQueryValues);

  const generateQueryString = (queries = []) => {
    if (queries?.length > 0) {
      let qString = "SELECT * FROM user_list";
      queries?.map((q, index) => {
        console.log("Q is : ", q);
        if (index == 0) {
          qString = `${qString} WHERE ${q} = "${newQueryValues[index]}"`;
        } else {
          qString = `${qString} AND ${q} = "${newQueryValues[index]}"`;
        }
      });

      return qString;
    } else {
      return `SELECT * FROM user_list`;
    }
  };

  let qureyString = generateQueryString(newQuery);

  console.log("qury string : ", qureyString);

  const allUsers = await sequelize
    .query(qureyString)
    .then((users) => {
      return users;
    })
    .catch((error) => {
      console.error("Error retrieving units:", error);
      res.status(500).json({
        message: `"Error retrieving units:" ${error}`,
      });
    });

  const newAllUsers = await Promise.all(
    allUsers &&
      allUsers[0].map(async (user) => {
        const result = await getResult(user?.id)
        return {
          ...user,
          result: result
        };
      })
  );

  // console.log("new all users is : ", newAllUsers)

  const response = {
    code: 200,
    data:newAllUsers,
  };

  //   console.log("response is : ", response);

  return res.status(200).json(response);
};
