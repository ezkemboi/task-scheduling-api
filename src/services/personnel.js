import bcrypt from "bcrypt";
import { Personnel } from "../models";

export default class PersonnelService {
  // find if user exists
  static async findUser({ phone }) {
    const personnel = await Personnel.findOne({ phone });
    return personnel;
  }

  // login func
  // only take password from req.body
  static async login({ password }, details) {
    // check if password matches the encrypted
    const isCredentialsValid = await bcrypt.compare(password, details.password);
    return isCredentialsValid;
  }

  // register user
  static async registerUser({ phone, password }) {
    const user = await Personnel.create({ phone, password });
    return user;
  }
}
