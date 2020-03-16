const personnelMiddleware = (req, res, next) => {
  const { phone, password } = req.body;
  /**
   * Add custom validation using
   * middlware that suport validations
   */
  if (!phone || !password) {
    return res.status(400).send({
      error: {
        message: "Please provide phone or password"
      }
    });
  }

  if (password.length < 6) {
    return res.status(400).send({
      error: {
        message: "Password provided is short. Use more than 6 chars"
      }
    });
  }
  // call next function
  return next();
};

export default personnelMiddleware;
