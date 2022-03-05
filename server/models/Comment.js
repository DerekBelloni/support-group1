import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const CommentSchema = new Schema({
  description: { type: String, required: true },
  profileId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)