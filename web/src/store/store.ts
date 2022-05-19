// export const createSearchStore = () => {
// 	return {
// 		searchKeyword: "",
// 		updateKeyword(text: string) {
// 			this.searchKeyword = text;
// 		}
// 	}
// };

// export type TStore = ReturnType<typeof createSearchStore>;

import { makeAutoObservable } from "mobx";

class Store {
	searchKeyword: string = "";
	searchValue: string = "";

	constructor() {
		makeAutoObservable(this);
	}

	updateKeyword(text: string) {
		this.searchKeyword = text;
	}

	addValue(keyword: string) {
		this.searchValue = keyword;
	}
}

export const store = new Store();
