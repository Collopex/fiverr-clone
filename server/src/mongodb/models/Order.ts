import mongoose from 'mongoose';
const { Schema } = mongoose;

interface OrderInterface extends mongoose.Document {
  _doc: any;
  gigId: string;
  img: string;
  title: string;
  price: number;
  sellerId: string;
  buyerId: string;
  isCompleted: boolean;
  payment_intent: string;
}

const orderSchema = new Schema<OrderInterface>(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<OrderInterface>('Order', orderSchema);
