import mongoose from 'mongoose';
const { Schema } = mongoose;

interface ConversationInterface extends mongoose.Document {
  _doc: any;
  id: string;
  sellerId: string;
  buyerId: string;
  readBySeller: boolean;
  readByBuyer: boolean;
  lastMessage: string;
}

const conversationSchema = new Schema<ConversationInterface>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ConversationInterface>(
  'Conversation',
  conversationSchema
);
