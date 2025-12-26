import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        medicineId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Medicine',
          required: true,
        },
        name: String,
        price: Number,
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      default: 0,
    },
    finalTotal: {
      type: Number,
      required: true,
    },
    customerInfo: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
