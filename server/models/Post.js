import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String, required: true },
  profileId: { type: ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('account', {
  localField: 'profileId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
