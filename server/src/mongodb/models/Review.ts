import mongoose from 'mongoose';
const { Schema } = mongoose;

interface ReviewInterface extends mongoose.Document {
  _doc: any;
  gigId: string;
  userId: string;
  star: number;
  description: string;
}

const reviewSchema = new Schema<ReviewInterface>(
  {
    gigId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ReviewInterface>('Review', reviewSchema);
