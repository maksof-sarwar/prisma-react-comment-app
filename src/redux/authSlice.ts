import { ICredential } from '@/models/credential.model';
import { RootState } from '@/redux/store';
import {
	deleteStorage,
	getStorage,
	setStorage,
	STOREAGETYPE,
} from '@/services/storage.service';
import { createSlice } from '@reduxjs/toolkit';
const initialState: { credential: ICredential | null } = {
	credential: getStorage('credential') || null,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredential: (state, action) => {
			state.credential = action.payload;
			setStorage(
				'credential',
				action.payload,
				action.payload.remember ? STOREAGETYPE.LOCAL : STOREAGETYPE.SESSION
			);
		},
		resetCredential: (state) => {
			state.credential = null;
			deleteStorage('credential');
		},
	},
});
export const { resetCredential, setCredential } = authSlice.actions;
export const selectCredential = (state: RootState) => state.auth.credential;
export default authSlice.reducer;
