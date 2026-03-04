import { createClerkSupabaseClient } from '@/utils/supabase/server';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Page() {
  const supabase = await createClerkSupabaseClient();

  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>Not logged in</div>;
  }

  // 🔥 Upsert profile (create if not exists)
  await supabase.from('user_profile').upsert({
    clerk_user_id: userId,
    email: user.emailAddresses[0].emailAddress,
    name: user.firstName,
  });

  const { data, error } = await supabase.from('user_profile').select('*');

  if (error) {
    return <pre className="text-black">{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <>
      <div className="text-black">{userId}</div>
      <pre className="text-black">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
