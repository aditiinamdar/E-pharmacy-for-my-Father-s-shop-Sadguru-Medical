# PharmaCare - Pharmacy Management App

A full-stack MERN (MongoDB, Express, React, Node.js) pharmacy application with a modern UI and comprehensive features.

## 🚀 Features

- **Product Catalog**: Browse medicines from MongoDB database
- **Shopping Cart**: Add/remove items, adjust quantities
- **Order Management**: Place orders with customer information
- **Stock Management**: Real-time stock updates
- **Responsive Design**: Works on desktop and mobile devices
- **Checkout System**: Complete checkout flow with form validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas connection string)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone/Extract the Project

```bash
cd first-react
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Configure MongoDB

**Option A: Local MongoDB (Recommended for development)**

1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - On Windows: MongoDB should start automatically or use Services
   - On macOS: `brew services start mongodb-community`
   - On Linux: `sudo systemctl start mongod`

**Option B: MongoDB Atlas (Cloud)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get your connection string
4. Update `server/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pharmacy
   ```

### 5. Setup Environment Files

**Frontend** (`.env` in root):
```
VITE_API_URL=http://localhost:5000/api
```

**Backend** (`server/.env`):
```
MONGODB_URI=mongodb://localhost:27017/pharmacy
PORT=5000
NODE_ENV=development
```

## 🎯 Running the Application

### Terminal 1: Start the Backend Server

```bash
cd server
npm run dev
# or
npm start
```

Expected output:
```
MongoDB connected: localhost
Pharmacy backend server running on http://localhost:5000
```

### Terminal 2: Start the Frontend Development Server

```bash
npm run dev
```

Expected output:
```
VITE v7.2.6 ready in XXXX ms
➜ Local: http://localhost:5173/
```

### Terminal 3: Initialize Database (First Time Only)

In a new terminal, run:

```bash
curl -X POST http://localhost:5000/api/init-medicines
```

Or use Postman/Thunder Client to POST to: `http://localhost:5000/api/init-medicines`

This will populate the database with sample medicines.

## 📂 Project Structure

```
first-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── MedicineCard.jsx
│   │   ├── ShoppingCart.jsx
│   │   └── CartItem.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── server/
│   ├── models/
│   │   ├── Medicine.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── medicines.js
│   │   └── orders.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── .env
└── package.json
```

## 🔌 API Endpoints

### Medicines

- `GET /api/medicines` - Get all medicines
- `GET /api/medicines/:id` - Get single medicine
- `POST /api/medicines` - Create new medicine
- `PUT /api/medicines/:id` - Update medicine
- `DELETE /api/medicines/:id` - Delete medicine

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Delete order

### Utilities

- `GET /api/health` - Health check
- `POST /api/init-medicines` - Initialize database with sample medicines

## 💾 Database Schema

### Medicine Collection

```javascript
{
  _id: ObjectId,
  name: String,
  price: Number,
  category: String,
  stock: Number,
  description: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Collection

```javascript
{
  _id: ObjectId,
  items: [
    {
      medicineId: ObjectId,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalPrice: Number,
  tax: Number,
  finalTotal: Number,
  customerInfo: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  status: String, // 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing the App

1. Open `http://localhost:5173` in your browser
2. Browse the medicine catalog
3. Click "Add to Cart" to add items
4. Click the cart icon to view shopping cart
5. Click "Proceed to Checkout"
6. Fill in your customer information
7. Click "Place Order" to submit

## 🛠️ Troubleshooting

### Backend Connection Error

If you see "Failed to load medicines. Please ensure the backend is running":

1. Check if backend server is running on port 5000
2. Verify MongoDB is running
3. Check console for error messages
4. Ensure `.env` file is configured correctly

### MongoDB Connection Error

If MongoDB won't connect:

1. Verify MongoDB is running:
   - Windows: Check Services for "MongoDB"
   - macOS: `brew services list`
   - Linux: `sudo systemctl status mongod`

2. If using MongoDB Atlas, verify:
   - Connection string is correct
   - Network access is allowed (check IP whitelist)
   - Database name matches

### Port Already in Use

- Frontend: Change in `vite.config.js`
- Backend: Change `PORT` in `server/.env`

## 📦 Dependencies

### Frontend
- react ^19.2.0
- react-dom ^19.2.0
- vite ^7.2.4

### Backend
- express ^4.18.2
- mongoose ^8.0.0
- cors ^2.8.5
- dotenv ^16.3.1

## 🎨 UI Features

- Gradient header with pharmacy branding
- Responsive grid layout for products
- Interactive shopping cart
- Form validation
- Loading states
- Error handling
- Smooth animations and transitions

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, check the console logs and ensure:
1. Both servers are running
2. MongoDB is connected
3. Network requests are successful (check Network tab in DevTools)
4. Environment variables are correctly set
