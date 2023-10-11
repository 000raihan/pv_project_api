const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Chapter3Model",
    {
      user_id: Sequelize.INTEGER,
      sap_id: Sequelize.STRING(255),
      chapter_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
      },
      slide1: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide2: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide3: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide4: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide5: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide6: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide7: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide8: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide9: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide10: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide11: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      slide12: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
     
      quiz1: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      quiz2: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      quiz3: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      quiz4: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },

      created_at: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: "DATETIME",
        allowNull: true,
        defaultValue: Sequelize.literal("NULL"),
      },
    },
    {
      tableName: "chapter3",
      createdAt: false,
      updatedAt: false,
    }
  );
};
