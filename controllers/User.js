const { UserListModel } = require("../models");

exports.Login  = async (req, res, next) => {
    const errorHandler = (err) => {
        return res.status(500).json({
            success: false,
            error: err
        });
    };

    const sap_id = req.body.sap_id;

    if(sap_id === ""){
        return res.status(200).json({
            success: false,
            message: "Please enter your sap id!"
        });
    }else{
        let userDetails = await UserListModel.findOne({ where: {sap_id: sap_id}}).catch(errorHandler);
        if(userDetails !== null){
            return res.status(200).json({
                success: true,
                result: userDetails,
            });
        }else{
            return res.status(200).json({
                success: false,
                message: "Please check your sap id!"
            });
        }
    }
};

exports.Insert  = async (req, res, next) => {
    const errorHandler = (err) => {
        return res.status(500).json({
            success: false,
            error: err
        });
    };

    if(req.body.name === "") {
      return res.status(200).json({
        success: false,
        message: "Please enter your name!"
      });
    }else if(req.body.sap_id === ""){
      return res.status(200).json({
        success: false,
        message: "Please enter your sap id!"
      });
    }else if(req.body.department === ""){
      return res.status(200).json({
        success: false,
        message: "Please enter your department!"
      });
    }else if(req.body.designation === ""){
      return res.status(200).json({
        success: false,
        message: "Please enter your designation!"
      });
    }else if(req.body.email === ""){
      return res.status(200).json({
        success: false,
        message: "Please enter your email!"
      });
    }else{
        let userDetails = await UsersModel.findOne({ where: {sap_id: req.body.sap_id}}).catch(errorHandler);
        if(userDetails === null) {
            const InsertDetails = await UsersModel.create(req.body).catch(errorHandler);
            return res.status(200).json({
                success: true,
                result: InsertDetails,
            });
        }else{
            return res.status(200).json({
                success: false,
                message: "Already use this email address",
            });
        }
    }
};

exports.UserDetails = async (req, res, next) => {
    const errorHandler = (err) => {
        return res.status(500).json({
            success: false,
            error: err
        });
    };
    let userDetails = await UserListModel.findOne({ where: {id: req.params.id}}).catch(errorHandler);
    return res.status(200).json({
        success: true,
        result: userDetails
    });
};
