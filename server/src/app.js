import express from 'express';
import router from '@/router';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', router);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
