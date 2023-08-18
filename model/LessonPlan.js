import mongoose from "mongoose";

const lessonPlanSchema = new mongoose({
  date: String,
  content: String,
});

const LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);

export default LessonPlan;
