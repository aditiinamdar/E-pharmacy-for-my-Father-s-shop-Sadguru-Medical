import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
let medicines = [];
let orders = [];
let medicineId = 1;
let orderId = 1;

// Initialize sample medicines
const initializeSampleMedicines = () => {
  medicines = [
    {
      _id: (medicineId++).toString(),
      name: 'Aspirin 500mg',
      price: 5.99,
      category: 'Pain Relief',
      stock: 50,
      description: 'For headaches and fevers',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Vitamin C 1000mg',
      price: 12.99,
      category: 'Vitamins',
      stock: 100,
      description: 'Boost immunity',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Antibiotic Cream',
      price: 8.49,
      category: 'Topical',
      stock: 30,
      description: 'For minor cuts and infections',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Cough Syrup',
      price: 7.99,
      category: 'Cough & Cold',
      stock: 45,
      description: 'Effective cough relief',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Bandages Pack (100)',
      price: 4.99,
      category: 'First Aid',
      stock: 60,
      description: 'Sterile adhesive bandages',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Ibuprofen 200mg',
      price: 6.49,
      category: 'Pain Relief',
      stock: 80,
      description: 'Anti-inflammatory pain reliever',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Allergy Relief Tablets',
      price: 9.99,
      category: 'Allergies',
      stock: 40,
      description: 'Fast-acting allergy relief',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: (medicineId++).toString(),
      name: 'Hand Sanitizer 500ml',
      price: 3.99,
      category: 'Hygiene',
      stock: 120,
      description: 'Kills 99.9% of germs',
      image: '💊',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
};

// Initialize medicines on startup
initializeSampleMedicines();

// Routes
// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running', timestamp: new Date() });
});

// Medicines endpoints
app.get('/api/medicines', (req, res) => {
  res.json(medicines);
});

app.get('/api/medicines/:id', (req, res) => {
  const medicine = medicines.find(m => m._id === req.params.id);
  if (!medicine) {
    return res.status(404).json({ message: 'Medicine not found' });
  }
  res.json(medicine);
});

app.post('/api/medicines', (req, res) => {
  const medicine = {
    _id: (medicineId++).toString(),
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  medicines.push(medicine);
  res.status(201).json(medicine);
});

app.put('/api/medicines/:id', (req, res) => {
  const index = medicines.findIndex(m => m._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Medicine not found' });
  }
  medicines[index] = {
    ...medicines[index],
    ...req.body,
    _id: medicines[index]._id,
    createdAt: medicines[index].createdAt,
    updatedAt: new Date(),
  };
  res.json(medicines[index]);
});

app.delete('/api/medicines/:id', (req, res) => {
  const index = medicines.findIndex(m => m._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Medicine not found' });
  }
  medicines.splice(index, 1);
  res.json({ message: 'Medicine deleted successfully' });
});

// Orders endpoints
app.post('/api/orders', (req, res) => {
  const { items, customerInfo } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Order must contain items' });
  }

  let totalPrice = 0;
  const processedItems = [];

  for (const item of items) {
    const medicine = medicines.find(m => m._id === item.id);
    if (!medicine) {
      return res.status(404).json({ message: `Medicine ${item.id} not found` });
    }

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

    medicine.stock -= item.quantity;
  }

  const tax = parseFloat((totalPrice * 0.08).toFixed(2));
  const finalTotal = parseFloat((totalPrice + tax).toFixed(2));

  const order = {
    _id: (orderId++).toString(),
    items: processedItems,
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    tax,
    finalTotal,
    customerInfo,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  orders.push(order);
  res.status(201).json(order);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o._id === req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
});

app.put('/api/orders/:id', (req, res) => {
  const index = orders.findIndex(o => o._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Order not found' });
  }
  orders[index] = {
    ...orders[index],
    status: req.body.status || orders[index].status,
    customerInfo: { ...orders[index].customerInfo, ...req.body.customerInfo },
    updatedAt: new Date(),
  };
  res.json(orders[index]);
});

app.delete('/api/orders/:id', (req, res) => {
  const index = orders.findIndex(o => o._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Order not found' });
  }
  orders.splice(index, 1);
  res.json({ message: 'Order deleted successfully' });
});

// Initialize medicines endpoint
app.post('/api/init-medicines', (req, res) => {
  medicines = [];
  medicineId = 1;
  initializeSampleMedicines();
  res.status(201).json({ message: 'Sample medicines initialized', count: medicines.length });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Pharmacy backend server running on http://localhost:${PORT}`);
  console.log(`✓ API available at http://localhost:${PORT}/api`);
  console.log(`✓ Using in-memory data storage`);
  console.log(`✓ Loaded ${medicines.length} medicines\n`);
});
