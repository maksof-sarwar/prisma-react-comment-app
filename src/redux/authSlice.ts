import { ICredential } from '@/models/user.model';
import { RootState } from '@/redux/store';
import {
	deleteStorage,
	getStorage,
	setStorage,
	STOREAGETYPE,
} from '@/services/storage.service';
import { createSlice } from '@reduxjs/toolkit';
const initialState: { credential: ICredential | null } = {
	credential:
		getStorage('credential') ||
		getStorage('credential', STOREAGETYPE.SESSION) ||
		null,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredential: (state, action) => {
			console.log(action.payload);
			state.credential = action.payload;
			setStorage(
				'credential',
				action.payload,
				action.payload.remember ? STOREAGETYPE.LOCAL : STOREAGETYPE.SESSION
			);
		},
		resetCredential: (state) => {
			const remember = state.credential!['remember'];
			deleteStorage(
				'credential',
				remember ? STOREAGETYPE.LOCAL : STOREAGETYPE.SESSION
			);
			state.credential = null;
		},
	},
});
export const { resetCredential, setCredential } = authSlice.actions;
export const selectCredential = (state: RootState) => state.auth.credential;
export default authSlice.reducer;
