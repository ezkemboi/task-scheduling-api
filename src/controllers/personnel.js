// controller for logging in
export default class PersonnelController {
  static login(req, res) {
    return res.status(200).send({
      message: "Successfully logged in"
    });
  }
}
