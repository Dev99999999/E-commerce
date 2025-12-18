import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import express from 'express';

const router = express.Router()

const option: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task1",
      version: "1.0.0",
      description: "This is E-commerce System"
    },
    tags: [
      {
        name: "users",
        description: "user API"
      },
      {
        name: "products",
        description: "product API"
      },
      {
        name: "cards",
        description: "Card API"
      }
    ],
    servers: [
      {
        "url": "http://localhost:3000/api/v1"
      }
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./src/app/routes/*.ts"]
}


const swaggerSpec = swaggerJSDoc(option)

require("swagger-model-validator")(swaggerSpec)

router.get("/json",(req: any, res: any) =>{
  res.setHeader("Content-Type", "application/json")
  res.send(swaggerSpec)
})

router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpec))


export default router