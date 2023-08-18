import mongoose from "mongoose";

const lessonPlanSchema = new mongoose({
  date: String,
});

const LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);

export default LessonPlan;
