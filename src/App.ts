import express from 'express';
import dotenv from "dotenv";
import logger from "morgan";


dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

class App {
  public express: express.Application;

  constructor() {
    this.express = express(); this.middleware();
    this.routes();
  }
  private middleware() {
    this.express.use(logger("dev"));
    this.express.use(express.json());
  }

  private routes() {
    const router: express.Router = express.Router();
    router.get("/", (_req: express.Request, res: express.Response) => {
      res.json({
        message: "Hello Stori team!",
      });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
