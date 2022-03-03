import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Day',
      last_name: 'Akao',
      email: 'dayakao@hotmail.com',
      age: 18,
      weight: 54,
      height: 1.56,
    });
    return res.json(newStudent);
  }
}

export default new HomeController();
