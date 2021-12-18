export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  participants: [User]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  place: Place\n  ride: Ride\n  GetMyProfile: GetMyProfileResponse!\n  user: User\n  verification: Verification\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  driver: User!\n  passenger: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CompleteVerificationResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  CompleteVerification(phoneNumber: String!, key: String!): CompleteVerificationResponse!\n  EmailSignIn(email: String!, password: String!): EamilSignInResponse!\n  EmailSignUp(email: String!, password: String!, firstName: String!, lastName: String!, age: Int!, phoneNumber: String!, profilePhoto: String!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, fbId: String!): FacebookConnectResponse!\n  PhoneVerification(phoneNumber: String!): PhoneVerificationResponse!\n}\n\ntype EamilSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype PhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  phoneNumber: String\n  fullName: String\n  verifiedPhoneNumber: Boolean!\n  verifiedEmail: Boolean!\n  profilePhoto: String\n  isWalking: Boolean!\n  isProtecting: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  chat: Chat\n  messages: [Message]\n  ridesAsPassenger: [Ride]\n  ridesAsDriver: [Ride]\n  fbId: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  place: Place | null;
  ride: Ride | null;
  GetMyProfile: GetMyProfileResponse;
  user: User | null;
  verification: Verification | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  driver: User;
  passenger: User;
  createdAt: string;
  updatedAt: string | null;
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
  lastOrientation: number | null;
  chat: Chat | null;
  messages: Array<Message> | null;
  ridesAsPassenger: Array<Ride> | null;
  ridesAsDriver: Array<Ride> | null;
  fbId: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  participants: Array<User>;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  CompleteVerification: CompleteVerificationResponse;
  EmailSignIn: EamilSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  PhoneVerification: PhoneVerificationResponse;
}

export interface CompleteVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  profilePhoto: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  fbId: string;
}

export interface PhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface CompleteVerificationResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EamilSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface PhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}
