'use client';

import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user-profile';
import Image from 'next/image';
import { toast } from 'sonner';

type ProfileFormProps = {
  profile: UserProfile;
};

export default function ProfileForm({ profile }: ProfileFormProps) {
  const [name, setName] = useState(profile.name ?? '');
  const [phone, setPhone] = useState(profile.phone ?? '');
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>(
    profile.profilePhoto,
  );
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (profilePhoto?.startsWith('blob:')) {
        URL.revokeObjectURL(profilePhoto);
      }
    };
  }, [profilePhoto]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selected = e.target.files[0];

    const MAX_SIZE = 2 * 1024 * 1024; // 2MB

    if (selected.size > MAX_SIZE) {
      alert('File size must be less than 2MB');
      return;
    }

    setFile(selected);
    setProfilePhoto(URL.createObjectURL(selected));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const loadingToast = toast.loading('Updating profile...');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);

    if (file) {
      formData.append('profilePhoto', file);
    }

    const res = await fetch('/api/profile', {
      method: 'PATCH',
      body: formData,
    });

    toast.dismiss(loadingToast);

    if (res.ok) {
      toast.success('Profile updated');
    } else {
      const data = await res.json().catch(() => null);
      toast.error(data?.error || 'Failed to update profile');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Photo */}
      <div>
        <label className="block mb-2">Profile Photo</label>

        {profilePhoto && (
          <Image
            src={profilePhoto}
            alt="profile"
            width={96}
            height={96}
            className="rounded-full mb-3 object-cover"
          />
        )}

        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* Name */}
      <div>
        <label>Name</label>
        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Phone */}
      <div>
        <label>Phone</label>
        <input
          className="border p-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2"
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
