import { createClerkSupabaseClient } from '@/utils/supabase/server';
import { auth } from '@clerk/nextjs/server';
import ProductForm from '@/components/ProductForm';

export default async function Dashboard() {
  const supabase = await createClerkSupabaseClient();
  const { userId } = await auth();

  if (!userId) return <div>Not logged in</div>;

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', userId);

  return (
    <div className="p-10 space-y-6 border-2 rounded-2xl bg-white text-black my-5 w-[100%] h-auto">
      <h1 className="text-2xl font-bold">Farmer Dashboard</h1>

      {/* Product Form */}
      <ProductForm />

      {/* Product List */}
      <div>
        <h2 className="text-xl font-semibold">Your Products</h2>
        <ul className="space-y-2">
          {products?.map((product) => (
            <li key={product.id} className="border p-2">
              {product.name} — ₹{product.price_per_unit} — {product.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
