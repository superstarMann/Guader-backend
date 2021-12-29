export const typeDefs = ["type Place {\n  id: Int!\n  name: String!\n  address: String!\n  lat: Float!\n  lng: Float!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  PickUpLat: Float!\n  PickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  created: String!\n  updated: String\n}\n\ntype Query {\n  ride: Ride\n  user: User\n  verification: Verification\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  phoneNumber: String\n  fullName: String\n  verifiedPhoneNumber: Boolean!\n  verifiedEmail: Boolean!\n  profilePhoto: String\n  isWalking: Boolean!\n  isProtecting: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastorientation: Float\n  fbId: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  ride: Ride | null;
  user: User | null;
  verification: Verification | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  PickUpLat: number;
  PickUpLng: number;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  created: string;
  updated: string | null;
}

export interface User {
  id: number;
  email: string | null;
  password: string | null;
  firstName: string;
  lastName: string;
  age: number | null;
  phoneNumber: string | null;
  fullName: string | null;
  verifiedPhoneNumber: boolean;
  verifiedEmail: boolean;
  profilePhoto: string | null;
  isWalking: boolean;
  isProtecting: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastorientation: number | null;
  fbId: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Place {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  isFav: boolean;
  createdAt: string;
  updatedAt: string | null;
}
