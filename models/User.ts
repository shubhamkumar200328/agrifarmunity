import { Schema, model, models } from 'mongoose';

const SellerDetailsSchema = new Schema(
  {
    fullname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    addressLine: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    country: { type: String },
    aadhaarNumber: { type: String, select: false },
  },
  { _id: false },
);

interface IUser {
  role: 'user' | 'seller' | 'admin';
  sellerDetails?: {
    phone: string;
    city?: string;
  };
}

const UserSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },

    role: {
      type: String,
      enum: ['user', 'seller', 'admin'],
      default: 'user',
    },

    sellerDetails: {
      type: SellerDetailsSchema,
      validate: {
        validator: function (this: IUser, value: IUser['sellerDetails']) {
          if (this.role === 'seller') {
            return !!value;
          }
          return !value;
        },
        message:
          "sellerDetails is required only when role is 'seller' and must be empty otherwise",
      },
    },
  },
  { timestamps: true },
);

const User = models.User || model('User', UserSchema);
export default User;
