import {ApolloServer, gql} from 'apollo-server';
import axios from 'axios';

// const PORT = 3005;

const typeDefs = gql`
	type CardData{
		name: String,
		desc: String
	}

	type Query{
		carddatas: [CardData]
	}
`;

const apidatas = async(url: string) => {
	try {
		const response = await axios.get(url);
		const data = await response.data;
		const cards = await data.data;
		return cards;
	} catch(err) {
		console.error(err);
	}
}

const carddatas = apidatas('https://db.ygoprodeck.com/api/v7/cardinfo.php');

const resolvers = {
	Query: {
		carddatas: () => carddatas
	}
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen()
	.then(({url}) => {
		console.log(`Server is ready at PORT: ${url}`);
	})