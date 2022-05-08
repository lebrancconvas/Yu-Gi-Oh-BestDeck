import React from 'react';
import '../App.css';
import CardSection from '../components/CardSection';


const Homepage: React.FC = () => {
	return(
		<div className="App">
			<h1 className="text-white text-3xl font-bold">Yu-Gi-Oh! The Best Deck</h1>

			<CardSection /> 
		</div>
	)
};

export default Homepage;