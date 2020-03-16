// controller for logging in
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { PersonnelService } from "../services";

dotenv.config();
export default class PersonnelController {
  // login
  static async login(req, res) {
    const isUserRegistered = await PersonnelService.findUser(req.body);
    // if not registered, register
    if (!isUserRegistered) {
      const user = await PersonnelService.registerUser(req.body);

      const accessToken = jwt.sign({
        phone: user.phone
      }, process.env.SECRET_KEY, { expiresIn: '24h' })

      return res.status(201).send({
        accessToken,
        expires_in: '24h'
      });
    }

    // if registered, login
    const isValidCredentials = await PersonnelService.login(
      req.body,
      isUserRegistered
    );

    if (!isValidCredentials) {
      res.status(400).send({
        message: "Password does not match"
      });
    }

    const accessToken = jwt.sign({
      phone: isValidCredentials.phone
    }, process.env.SECRET_KEY, { expiresIn: '24h' })

    // return is registered user details.
    return res.status(201).send({
      accessToken,
      expires_in: '24h'
    });
  }
}
