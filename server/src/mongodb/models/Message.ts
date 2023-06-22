import mongoose from 'mongoose';
const { Schema } = mongoose;

interface MessageInterface extends mongoose.Document {
  _doc: any;
  conversationId: string;
  userId: string;
  message: string;
}

const messageSchema = new Schema<MessageInterface>(
  {
    conversationId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<MessageInterface>('Message', messageSchema);
