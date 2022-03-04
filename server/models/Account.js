import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    description: { type: String, require: true },
    // creatorId: { type: Schema.Types.ObjectId, required: true, ref: '' }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// export const ProfileSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     picture: { type: String, required: true },
//     creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
//     description: { type: String, required: true }
//     // NOTE if you want to make properties from the account public put them here
//   },
//   { timestamps: true, toJSON: { virtuals: true } }
// )
