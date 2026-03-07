import { getProfile } from '@/services/profile-service';
import ProfileForm from '@/components/profile/profile-form';
import { auth } from '@clerk/nextjs/server';

export default async function Page() {
  const { userId } = await auth();

  if (!userId) throw new Error('Not authenticated');

  const profile = await getProfile(userId);

  return (
    <div className="max-w-xl mx-auto mt-10 border-2 rounded-2xl bg-white text-black w-[50%] h-auto p-5">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <ProfileForm profile={profile} />
    </div>
  );
}
