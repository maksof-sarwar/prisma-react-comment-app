import rootReducer from '@/redux/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
