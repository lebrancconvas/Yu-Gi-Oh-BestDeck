import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './controllers/router';

const app: Application = express();
const PORT = process.env.PORT || 3002;

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});