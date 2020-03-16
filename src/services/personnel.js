import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Personnel } from "../models";

dotenv.config();
export default class PersonnelService {
  // login func
  static async login(req, phone, password, done) {
    const findUser = await Personnel.findOne({ phone });
    // if user not found
    if (!findUser) {
      // create one
      const user = await Personnel.create({ phone, password });
      const accessToken = jwt.sign(
        {
          phone: user.phone
        },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );
      return done(null, { accessToken }, { expiresIn: "24h" });
    }

    const isCredentialsValid = await bcrypt.compare(
      password,
      findUser.password
    );

    // when password does not match
    if (!isCredentialsValid) {
      return done(true, null);
    }

    const accessToken = jwt.sign(
      {
        phone: isCredentialsValid.phone
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    // login user
    return done(null, { accessToken }, { expiresIn: "24h" });
  }
}
