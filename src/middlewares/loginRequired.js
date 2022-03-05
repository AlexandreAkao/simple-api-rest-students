import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Token not provided'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = {
      ...decoded,
    };

    return next();
  } catch (error) {
    return res.status(401).json({
      erros: ['Token invalid'],
    });
  }
};
