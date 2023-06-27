const db = require("../model");

exports.createTodo = async (req, res) => {
  try {
    const { task, description} = req.body;

    if (!task || task.trim() === "") {
      console.log(task);
      return res.status(400).json({
        success: false,
        message: "Todo is required.",
      });
    }

    const todo = await db.todo.create({
      todo: task,
      description: description
    });

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Todo not created",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server",
      error: error.message,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await db.todo.findAll({
      where: { is_active: true},
    });
    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Todo not Exist",
      });
    }
    return res.status(201).json({
      data: todo,
      success: true,
      message: "Todo fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong on server",
      error: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo_id = req.params.id
    const findTodo = await db.todo.findOne({
      where: { todo_id: todo_id },
    });
    if (!findTodo) {
      return res.status(200).json({
        success: false,
        message: "Todo not found",
      });
    }
    await db.todo.update(
      {
        is_completed: true,
      },
      {
        where: { todo_id: todo_id },
      }
    );
    return res.status(201).json({
      success: true,
      message: "Todo Task updated as completed"
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Somethig went wrong on server",
      error: error.message,
    });
  }
};

exports.deleteTodo = async(req, res)=>{
    try {
        const todo_id = req.params.id
    const findTodo = await db.todo.findOne({
      where: { todo_id: todo_id },
    });
    if (!findTodo) {
      return res.status(200).json({
        success: false,
        message: "Todo not found",
      });
    }
    await db.todo.update(
      {
        is_active: false,
      },
      {
        where: { todo_id: todo_id },
      }
    );
    return res.status(201).json({
      success: true,
      message: "Todo Task Deleted"
    });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong on server",
            error: error.message,
          });
    }
}
