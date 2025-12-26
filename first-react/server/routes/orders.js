import express from 'express';
import Order from '../models/Order.js';
import Medicine from '../models/Medicine.js';

const router = express.Router();

// Create new order
router.post('/', async (req, res) => {
  try {
    const { items, customerInfo } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain items' });
    }

    // Calculate total
    let totalPrice = 0;
    const processedItems = [];

    for (const item of items) {
      const medicine = await Medicine.findById(item.id);
      if (!medicine) {
        return res.status(404).json({ message: `Medicine ${item.id} not found` });
      }

      // Check stock
      if (medicine.stock < item.quantity) {
        return res.status(400).json({ 
          message: `Insufficient stock for ${medicine.name}` 
        });
      }

      const itemTotal = medicine.price * item.quantity;
      totalPrice += itemTotal;

      processedItems.push({
        medicineId: medicine._id,
        name: medicine.name,
        price: medicine.price,
        quantity: item.quantity,
      });

      // Update stock
      medicine.stock -= item.quantity;
      await medicine.save();
    }

    const tax = parseFloat((totalPrice * 0.08).toFixed(2));
    const finalTotal = parseFloat((totalPrice + tax).toFixed(2));

    const order = new Order({
      items: processedItems,
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      tax,
      finalTotal,
      customerInfo,
      status: 'pending',
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.medicineId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.medicineId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order status
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (req.body.status) {
      order.status = req.body.status;
    }
    if (req.body.customerInfo) {
      order.customerInfo = { ...order.customerInfo, ...req.body.customerInfo };
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
