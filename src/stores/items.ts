import { Model } from "../model";
import { observable, action, runInAction, computed } from 'mobx';
import Axios from "axios";
import { Config } from "../config";

export class ItemsStore {
	@observable items: Model[];
	
	@action.bound async loadItems(): Promise<void> {
		if (this.items.length > 0) {
			return;
		}
		const url = Config.apiUrl + '/list';
		const resp = await Axios.get(url);
		runInAction(() => {
			this.items = resp.data.map((item) => new Model(item));
		});
	}
}
