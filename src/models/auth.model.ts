export interface ISignIn {
	password: string;
	email: string;
}
export interface ISignUp extends ISignIn {
	name: string;
}
