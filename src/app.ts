import 'dotenv/config';
import express from 'express';
import UserRouter from './app/routes/user';
import ProductRouter from './app/routes/product';
import cardRouter from './app/routes/card';
import swaggerUI from 'swagger-ui-express'
import swagger from './swagger_ui/swagger'
// import swaggerSpec from './swagger';
// import swaggerDocs from './swagger_ui/swaggerDocs.json'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swagger)

app.use("/api/v1", UserRouter);
app.use("/api/v1", ProductRouter);
app.use("/api/v1", cardRouter);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
