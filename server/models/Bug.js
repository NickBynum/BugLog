import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Bug = new Schema({
  status: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  closedDate: { type: Date},
  creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
export default Bug