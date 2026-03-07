// src/services/profile-service.ts

import { createClerkSupabaseClient } from '@/utils/supabase/server';
import { UserProfile, UpdateUserProfile } from '@/types/user-profile';

export async function getProfile(userId: string): Promise<UserProfile> {
  const supabase = await createClerkSupabaseClient();

  const { data, error } = await supabase
    .from('user_profile')
    .select('*')
    .eq('clerk_user_id', userId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return {
    clerkUserId: data.clerk_user_id,
    email: data.email,
    name: data.name,
    phone: data.phone,
    profilePhoto: data.profile_photo,
    isVerified: data.is_verified,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function updateProfile(
  userId: string,
  values: UpdateUserProfile,
): Promise<UserProfile> {
  const supabase = await createClerkSupabaseClient();

  const updateData: {
    name?: string;
    phone?: string;
    profile_photo?: string;
  } = {
    name: values.name,
    phone: values.phone,
  };

  if (values.profilePhoto) {
    updateData.profile_photo = values.profilePhoto;
  }

  const { data, error } = await supabase
    .from('user_profile')
    .update(updateData)
    .eq('clerk_user_id', userId)
    .select()
    .maybeSingle();

  if (error) throw new Error(error.message);

  return {
    clerkUserId: data.clerk_user_id,
    email: data.email,
    name: data.name,
    phone: data.phone,
    profilePhoto: data.profile_photo,
    isVerified: data.is_verified,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}
