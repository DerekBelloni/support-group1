import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const CommentSchema = new Schema({
  description: { type: String, required: true },
  profileId: { type: ObjectId, required: true },
  postId: { type: ObjectId, required: true }
},
  { timestamps: true, toJSON: { virtuals: true } }
)