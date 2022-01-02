export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  participants: [User]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  user: User!\n  chat: Chat!\n  text: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  address: String!\n  lat: Float!\n  lng: Float!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  PickUpLat: Float!\n  PickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  driver: User!\n  passenger: User!\n  created: String!\n  updated: String\n}\n\ntype Query {\n  ride: Ride\n  GetMyProfile: GetMyProfileResponse!\n  user: User\n  verification: Verification\n}\n\ntype CompleteEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CompleteEmailVerification(key: String!): CompleteEmailVerificationResponse!\n  CompletePhoneVerification(key: String!, phoneNumber: String!): CompletePhoneVerificationResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, firstName: String!, lastName: String!, age: Int!, phoneNumber: String!, profilePhoto: String!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, fbId: String!): FacebookConnectResponse!\n  RequestEmailVerification: RequestEmailVerificationResponse!\n  StartPhoneVerification(phoneNumber: String!): StartPhoneVerificationResponse!\n}\n\ntype CompletePhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype RequestEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  phoneNumber: String\n  fullName: String\n  verifiedPhoneNumber: Boolean!\n  verifiedEmail: Boolean!\n  profilePhoto: String\n  isWalking: Boolean!\n  isProtecting: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastorientation: Float\n  fbId: String\n  messages: [Message]\n  chat: Chat\n  ridesAsPassenger: [Ride]\n  ridesAsDriver: [Ride]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  ride: Ride | null;
  GetMyProfile: GetMyProfileResponse;
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
  driver: User;
  passenger: User;
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
  messages: Array<Message> | null;
  chat: Chat | null;
  ridesAsPassenger: Array<Ride> | null;
  ridesAsDriver: Array<Ride> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  user: User;
  chat: Chat;
  text: string;
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
  updatedAt: string;
}

export interface Mutation {
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
}

export interface CompleteEmailVerificationMutationArgs {
  key: string;
}

export interface CompletePhoneVerificationMutationArgs {
  key: string;
  phoneNumber: string;
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

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface CompleteEmailVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface CompletePhoneVerificationResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignInResponse {
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

export interface RequestEmailVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
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
