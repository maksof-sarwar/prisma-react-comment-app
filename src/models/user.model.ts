export interface IUser {
	id: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
}
export interface ICredential extends IUser {
	token: string;
}
