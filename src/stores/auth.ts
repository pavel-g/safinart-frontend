import Axios from "axios";
import { Config } from "../config";
import { observable, computed, action, runInAction } from "mobx";

export class AuthStore {
	
	@observable token: string|null = null;
	
	@observable name: string|null = null;
	
	@computed get isAuth(): boolean {
		return Boolean(this.token);
	}
	
	@action.bound async login(name: string, password: string): Promise<void> {
		const url = Config.apiUrl + '/login';
		const resp = await Axios.post(url, {
			name: name,
			password: password
		});
		runInAction(() => {
			this.token = resp.data['token'];
			this.name = name;
		});
	}
	
	@action logout(): void {
		this.token = null;
		this.name = null;
	}
	
}