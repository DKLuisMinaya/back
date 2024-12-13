import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TOKEN_KEY } from "../config/config.js";
import { PersonsModel } from "../models/PersonsModel.js";

export const createUser2 = async (req, res) => {
    try {
      const { direccion, tlf, sexo, edad } = req.body;
      if (!(direccion || tlf  || sexo || edad )) {
        res.status(400).json({ message: "all input is required" });
      }
      
      
     const encryptedPassword = await bcrypt.hash(password.toString(),10);
      // Create user in our database
      
      const users = await UserModel.create({
        direccion,
        tlf,
        dni,
        sexo, 
        edad,
      });
      // Create token
      const token = jwt.sign({ user_id: users.id, email }, TOKEN_KEY, {
        expiresIn: "1h",
      });
      // save user token
      // users.token = token;
      res.status(201).json({ users, token: token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };