'use server';

import { createClerkSupabaseClient } from '@/utils/supabase/server';
import { auth } from '@clerk/nextjs/server';

interface CreateProductInput {
  name: string;
  price_per_unit: number;
  quantity: number;
}

export async function createProduct(data: CreateProductInput) {
  const supabase = await createClerkSupabaseClient();
  const { userId } = await auth();

  if (!userId) throw new Error('Not authenticated');

  const { name, price_per_unit, quantity } = data;

  const { error } = await supabase.from('products').insert({
    farmer_id: userId,
    name,
    price_per_unit,
    quantity,
    is_available: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}
