import supertest from "supertest";
import mockingoose from "mockingoose";
import {UsuarioModel} from "../model/usuario";
import app from "../server";

test("[GET] /usuarios", async () => {
  const mockusuarios = [{
      _id: "123",
      username: "mauro",
      password: "jorge"
  }];
  mockingoose(UsuarioModel).toReturn(mockusuarios, "find");

  const response = await supertest(app).get("/usuarios");
  expect(response.text).toBe(JSON.stringify(mockingoose));

})