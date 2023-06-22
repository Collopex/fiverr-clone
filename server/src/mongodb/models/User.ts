import mongoose from 'mongoose';
const { Schema } = mongoose;

interface UserInterface extends mongoose.Document {
  _doc: any;
  username: string;
  email: string;
  password: string;
  img: string;
  country: string;
  phone: string;
  description: string;
  isSeller: boolean;
}

const userSchema = new Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      requird: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserInterface>('User', userSchema);
