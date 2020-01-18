import express, {Application, Request, Response, NextFunction} from "express"
import {connect} from "mongoose"
import {usuarioRouter} from "./router/usuarioRouter";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next:NextFunction) => {
  console.log(new Date());
  next();
});

app.use("/usuarios",usuarioRouter);

app.listen(8080, async () => {
  await connect("mongodb://localhost:27017/iesp");
  console.log("servidor rodando")
});

export default app