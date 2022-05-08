// Code Something. 

import express, { Application, Request, Response } from 'express';
import router from './controllers/router';

const app: Application = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(router);

// app.get('/', (req: Request, res: Response) => {
// 		res.send('Yu-Gi-Oh! Best Deck Server.');
// });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});