import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { store } from '../store/store';

const CardSearch: React.FC = () => {
	// const [searchValue, setSearchValue] = useState<string>("");

	// useEffect(() => {
	// 	store.updateKeyword(searchValue);
	// }, [searchValue]);

	return(
		<div className="font-bold text-3xl pb-5">  
			<h1 className="text-white">Search</h1> 
			<input type="text" placeholder="Search your cards." onChange={e => {store.searchKeyword = e.target.value}} value={store.searchKeyword} /> 
			<button className="rounded-full bg-teal-300 text-blue-800 p-3 hover:bg-teal-500" onChange={() => store.addValue(store.searchKeyword)}>Search</button>
		</div>
	)
};

export default observer(CardSearch); 