import express from 'express';
import Medicine from '../models/Medicine.js';

const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single medicine by ID
router.get('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new medicine
router.post('/', async (req, res) => {
  const medicine = new Medicine({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update medicine
router.put('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    if (req.body.name) medicine.name = req.body.name;
    if (req.body.price) medicine.price = req.body.price;
    if (req.body.category) medicine.category = req.body.category;
    if (req.body.stock !== undefined) medicine.stock = req.body.stock;
    if (req.body.description) medicine.description = req.body.description;
    if (req.body.image) medicine.image = req.body.image;

    const updatedMedicine = await medicine.save();
    res.json(updatedMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete medicine
router.delete('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
