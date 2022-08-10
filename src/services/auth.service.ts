import { get, post } from '@/services/App.service';
import { ISignIn, ISignUp } from '@/models/auth.model';

export const signUpApi = (data: ISignUp) => post(`auth/sign-up`, data);
export const signInApi = (data: ISignIn) => post(`auth/sign-in`, data);
export const getProfile = (token: string) => get(`auth/get-profile/${token}`);
