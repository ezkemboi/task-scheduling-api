// controller for logging in
import passport from "passport";

export default class PersonnelController {
  // login
  static async login(req, res, next) {
    passport.authenticate(
      "local",
      { session: false },
      async (err, user, info) => {
        if (err) {
          return res.status(400).send({
            error: {
              message: "You have entered an incorrect password"
            }
          });
        }
        const { accessToken } = user;
        const { expiresIn } = info;
        return res.status(200).send({
          resetPassword: 0,
          accessToken,
          expiresIn
        });
      }
    )(req, res, next);
  }
}
