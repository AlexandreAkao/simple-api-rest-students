import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll({ attributes: ['id', 'name', 'email'] });

    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Id should be passed'] });

    const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    return res.json(user);
  }

  async store(req, res) {
    const newUser = await User.create(req.body);

    return res.status(201).json(newUser);
  }

  async update(req, res) {
    const { id } = req.user;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    const userUpdated = await user.update(req.body);

    return res.json(userUpdated);
  }

  async delete(req, res) {
    const { id } = req.user;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    await user.destroy();

    return res.json(user);
  }
}

export default new UserController();
