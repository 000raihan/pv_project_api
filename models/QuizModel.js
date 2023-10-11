const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "QuizModel",
    {
      user_id: Sequelize.INTEGER,
      sap_id: Sequelize.STRING(255),
      chapter: Sequelize.STRING(255),
      chapter_section: Sequelize.STRING(255),
      page_name: Sequelize.STRING(255),
      page_time: Sequelize.STRING(255),
      quiz: Sequelize.STRING(255),
      selected_option: Sequelize.STRING(255),
      correct_option: Sequelize.STRING(255),
      ans_status: Sequelize.STRING(255),
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
      tableName: "quiz_data",
      createdAt: false,
      updatedAt: false,
    }
  );
};
