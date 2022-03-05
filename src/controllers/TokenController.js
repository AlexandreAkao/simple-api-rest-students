import jwt from 'jsonwebtoken';

import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Email and password are required'],
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    const isPasswordValid = await user.passwordIsValid(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        errors: ['Email or password invalid'],
      });
    }

    const token = jwt.sign({ id: user.id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ user, token });
  }
}

export default new TokenController();
