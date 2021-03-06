import mongoose, { Schema, Document } from 'mongoose';
import Garage from '../interfaces/garage.interface';

export type GarageDocument = Document & Garage;

const Coordinates = new Schema({
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
});

const GarageSchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  location: {
    googleId: {
      type: String,
      required: true,
    },
    coordinates: {
      type: Coordinates,
      required: true,
    },
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  createdDate: {
    type: Number,
    default: Date.now(),
    required: true,
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  updatedDate: {
    type: Number,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model<GarageDocument>('Garage', GarageSchema);
