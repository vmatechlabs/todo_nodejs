module.exports = (sequelize, Sequelize, db) => {
    const todo = sequelize.define('todo', {
      todo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement:true,
      },
      todo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type : Sequelize.STRING,
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    });
  
    return todo;
  };
  