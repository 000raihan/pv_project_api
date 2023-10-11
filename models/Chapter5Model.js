const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Chapter5Model",
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
      quiz1: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      quiz2: {
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
      tableName: "chapter5",
      createdAt: false,
      updatedAt: false,
    }
  );
};
