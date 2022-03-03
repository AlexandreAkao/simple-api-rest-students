import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      return res.json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: error.errors.map((validationError) => validationError.message),
      });
    }
  }
}

export default new UserController();
