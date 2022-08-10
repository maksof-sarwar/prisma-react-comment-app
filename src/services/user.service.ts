import { get } from '@/services/App.service';
import { IUser } from '@/models/user.model';

export const getProfile = (data: IUser) => get(`user/get-profile`, data);
