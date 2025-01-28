import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});