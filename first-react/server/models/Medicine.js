import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ['Pain Relief', 'Vitamins', 'Topical', 'Cough & Cold', 'First Aid', 'Allergies', 'Hygiene', 'Other'],
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '💊',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Medicine', medicineSchema);
