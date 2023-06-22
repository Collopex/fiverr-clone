import mongoose from 'mongoose';
const { Schema } = mongoose;

interface GigInterface extends mongoose.Document {
  _doc: any;
  userId: string;
  title: string;
  description: string;
  totalStars: number;
  starNumber: number;
  category: string;
  price: number;
  coverImg: string;
  images: string[];
  shortTitle: string;
  shortDescription: string;
  deliveryTime: number;
  revisionNumber: number;
  features: string[];
  sales: number;
}

const gigSchema = new Schema<GigInterface>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<GigInterface>('Gig', gigSchema);
