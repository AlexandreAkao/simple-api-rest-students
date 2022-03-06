import Image from '../models/Image';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: { exclude: ['created_at', 'updated_at'] },
      order: [['id', 'DESC'], [Image, 'id', 'DESC']],
      include: {
        model: Image,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    return res.json(students);
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Id should be passed'] });

    const student = await Student.findByPk(id, {
      attributes: { exclude: ['created_at', 'updated_at'] },
      order: [[Image, 'id', 'DESC']],
      include: {
        model: Image,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    if (!student) return res.status(404).json({ errors: ['Student not found'] });

    return res.json(student);
  }

  async store(req, res) {
    const newStudent = await Student.create(req.body);

    return res.status(201).json(newStudent);
  }

  async update(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Id should be passed'] });

    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ errors: ['Student not found'] });

    const studentUpdated = await student.update(req.body);

    return res.json(studentUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Id should be passed'] });

    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ errors: ['Student not found'] });

    await student.destroy();

    return res.json(student);
  }
}

export default new StudentController();
