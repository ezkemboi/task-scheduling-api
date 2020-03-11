// controller for logging in
import { PersonnelService } from "../services";

export default class PersonnelController {
  // login
  static async login(req, res) {
    const isUserRegistered = await PersonnelService.findUser(req.body);
    // if not registered, register
    if (!isUserRegistered) {
      const user = await PersonnelService.registerUser(req.body);
      return res.status(201).send({
        message: "Successfully created a new user",
        user
      });
    }

    // if registered, login
    const isValidCredentials = await PersonnelService.login(
      req.body,
      isUserRegistered
    );

    if (!isValidCredentials) {
      res.status(400).send({
        message: "Password doesn't match"
      });
    }

    // return is registered user details.
    return res.status(200).send({
      message: "Successfully logged in",
      user: isUserRegistered
    });
  }
}
