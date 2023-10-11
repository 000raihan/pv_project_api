const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("UserListModel", {
      sap_id: Sequelize.STRING(255),
      name: Sequelize.STRING(255),
      designation: Sequelize.STRING(255),
      department: Sequelize.STRING(255),
      date_of_joining: Sequelize.STRING(255),
      location: Sequelize.STRING(255),
      unit: Sequelize.STRING(255),
      password: Sequelize.STRING(255),
      status: Sequelize.INTEGER,
      is_password_change: { type: Sequelize.INTEGER, defaultValue: 0 },
      is_new_submit: { type: Sequelize.INTEGER, defaultValue: 0 },
      created_at: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: 'DATETIME', allowNull: true, defaultValue: Sequelize.literal('NULL') }
  },
  {
    tableName: "user_list",
    createdAt: false,
    updatedAt: false
  });
};
