import 'dotenv/config';
import express from 'express';
import router from './router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3333, () => {
    console.log(`🚀 App started on port ${process.env.PORT || 3333} - Hello ${process.env.HELLO}`);
});
