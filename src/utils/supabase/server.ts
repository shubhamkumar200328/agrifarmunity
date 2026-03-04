import { auth } from '@clerk/nextjs/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function createClerkSupabaseClient() {
  const { getToken } = await auth();

  const token = await getToken({ template: 'supabase' });

  if (!token) {
    throw new Error('No Clerk Supabase token found');
  }

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  );
}
