'use client';

import { useState } from 'react';
import { createProduct } from '@/app/dashboard/action';

interface ProductFormValues {
  name: string;
  price: number;
  quantity: number;
}

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState<ProductFormValues>({
    name: '',
    price: 0,
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: name === 'name' ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createProduct({
        name: formValues.name,
        price_per_unit: formValues.price,
        quantity: formValues.quantity,
      });

      // Reset form
      setFormValues({
        name: '',
        price: 0,
        quantity: 0,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Product Name"
        value={formValues.name}
        onChange={handleChange}
        className="border p-2 block w-full"
        required
      />

      <input
        name="price"
        placeholder="Price per unit"
        type="number"
        value={formValues.price}
        onChange={handleChange}
        className="border p-2 block w-full"
        required
      />

      <input
        name="quantity"
        placeholder="Quantity"
        type="number"
        value={formValues.quantity}
        onChange={handleChange}
        className="border p-2 block w-full"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 disabled:opacity-50"
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
}
