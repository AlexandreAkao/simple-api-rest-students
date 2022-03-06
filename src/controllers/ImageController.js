import multer from 'multer';

import Image from '../models/Image';

import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('file');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        const newImage = await Image.create({ originalname, filename, student_id });

        return res.status(201).json(newImage);
      } catch (error) {
        return res.status(400).json({
          erros: ['Student not found'],
        });
      }
    });
  }

  async index(req, res) {
    const image = await Image.findAll();
    return res.json(image);
  }
}

export default new ImageController();
