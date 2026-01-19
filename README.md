# 🏥 Sadguru Medical E-Pharmacy

**A modern, efficient e-commerce solution for pharmacy management.**
Streamline operations, manage inventory, and provide a seamless shopping experience for customers with AI-powered assistance.

### 🌐 [Live Demo](https://sadguru-medical-pharmacy.onrender.com/)

## 🚀 Key Features

- **🛍️ Comprehensive E-commerce**: Search, filter, and purchase medicines and healthcare products.
- **🔐 Secure Authentication**: Robust login systems for Users (Customers) and Sellers (Admins).
- **📦 Inventory Management**: Sellers can easily add, update, and track stock levels.
- **🤖 AI Assistant**: Built-in chatbot powered by **Google Gemini** to answer health-related queries and assist users.
- **💳 Secure Payments**: Integrated **Stripe** payment gateway for safe and fast transactions.
- **🕵️ Admin Dashboard**: Detailed insights into orders, customers, and revenue.

## 🛠️ Tech Stack

This project is built using the **MERN Stack** and leverages modern AI technologies:

- **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/) (`@google/generative-ai`)
- **Payment Processing**: [Stripe](https://stripe.com/)
- **Authentication**: JWT & Bylcrypt

## 📦 Installation

 Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd epharmacy
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies.
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following keys:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
GOOGLE_API_KEY=your_google_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Client Setup
Open a new terminal, navigate to the client directory, and install dependencies.
```bash
cd client
npm install
```

Start the frontend application:
```bash
npm run dev
```

## 📝 Usage

1.  **Register/Login**: Create a customer account or log in as a seller.
2.  **Browse Products**: Use the search bar or categories to find medicines.
3.  **Add to Cart**: Select items and proceed to checkout.
4.  **Checkout**: Enter shipping details and pay securely via Stripe.
5.  **Chat with AI**: Click the chatbot icon to ask questions about medicines or health tips.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
