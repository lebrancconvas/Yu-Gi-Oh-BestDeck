import React from 'react';
import '../App.css';
import MonsterCardSection from '../components/MonsterCardSection';
import SpellCardSection from '../components/SpellCardSection';
import TrapCardSection from '../components/TrapCardSection';


const Homepage: React.FC = () => {
	return(
		<div className="App">
			<h1 className="text-white text-3xl font-bold">Yu-Gi-Oh! The Best Deck</h1>

			<hr />

			<div className="grid grid-cols-3">
				<div>
					<h2 className="text-white text-2xl font-bold">
						Monster Card Section
					</h2>
					<MonsterCardSection /> 
				</div>

				<div>
					<h2 className="text-white text-2xl font-bold">
						Spell Card Section
					</h2>
					<SpellCardSection />
				</div>

				<div>
					<h2 className="text-white text-2xl font-bold">
						Trap Card Section
					</h2>
					<TrapCardSection />
				</div>
			</div>

		</div>
	)
};

export default Homepage;