const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiClient = {
  // Medicines endpoints
  medicines: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/medicines`);
      if (!response.ok) throw new Error('Failed to fetch medicines');
      return response.json();
    },

    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/medicines/${id}`);
      if (!response.ok) throw new Error('Failed to fetch medicine');
      return response.json();
    },

    create: async (medicineData) => {
      const response = await fetch(`${API_BASE_URL}/medicines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medicineData),
      });
      if (!response.ok) throw new Error('Failed to create medicine');
      return response.json();
    },

    update: async (id, medicineData) => {
      const response = await fetch(`${API_BASE_URL}/medicines/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medicineData),
      });
      if (!response.ok) throw new Error('Failed to update medicine');
      return response.json();
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/medicines/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete medicine');
      return response.json();
    },
  },

  // Orders endpoints
  orders: {
    create: async (orderData) => {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) throw new Error('Failed to create order');
      return response.json();
    },

    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/orders`);
      if (!response.ok) throw new Error('Failed to fetch orders');
      return response.json();
    },

    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/orders/${id}`);
      if (!response.ok) throw new Error('Failed to fetch order');
      return response.json();
    },

    update: async (id, orderData) => {
      const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) throw new Error('Failed to update order');
      return response.json();
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete order');
      return response.json();
    },
  },

  // Health check
  health: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Server is not running');
    return response.json();
  },
};
