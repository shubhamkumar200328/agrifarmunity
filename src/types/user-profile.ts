import { ClerkID, Timestamp } from './common';

export type UserProfile = {
  clerkUserId: ClerkID;
  email: string;
  name: string;
  phone?: string;
  profilePhoto?: string;
  isVerified: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type CreateUserProfile = {
  clerkUserId: ClerkID;
  email: string;
  name: string;
  phone?: string;
  profilePhoto?: string;
};

export type UpdateUserProfile = {
  name?: string;
  phone?: string;
  profilePhoto?: string;
};
