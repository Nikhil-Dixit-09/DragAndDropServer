const mongoose = require("mongoose");
const tasksSchema = mongoose.Schema({
  description: { type: String,required:true },
  status: { type: String, default: "To Do" },
  title:{type:String,required:true}
});
const Tasks = mongoose.model("Tasks", tasksSchema);
module.exports = Tasks;