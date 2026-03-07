import { updateProfile } from '@/services/profile-service';
import { createClerkSupabaseClient } from '@/utils/supabase/server';
import { auth } from '@clerk/nextjs/server';

import { toast } from 'sonner';

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = await createClerkSupabaseClient();

    const formData = await req.formData();

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const file = formData.get('profilePhoto') as File | null;

    let profilePhoto: string | undefined;

    if (file && file.size > 2 * 1024 * 1024) {
      toast.error('Image must be smaller than 2MB');
      return;
    }

    if (file && !file.type.startsWith('image/')) {
      return Response.json(toast.error('Only image files are allowed'));
    }

    if (file && file.size > 0) {
      const filePath = `profiles/${userId}.jpg`;

      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(filePath, file, {
          upsert: true,
          cacheControl: '3600',
        });

      if (uploadError) {
        console.error('Upload Error:', uploadError);
        return Response.json({ error: uploadError.message }, { status: 500 });
      }

      const { data } = supabase.storage
        .from('profile-images')
        .getPublicUrl(filePath);

      profilePhoto = data.publicUrl;
    }

    const data = await updateProfile(userId, {
      name,
      phone,
      profilePhoto,
    });

    return Response.json(data);
  } catch (error) {
    console.error('Profile update error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
