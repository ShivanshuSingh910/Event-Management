import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied ' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

export const verifyRole = (role) => (req, res, next) => {
    if (!['admin', 'user', 'eventProvider'].includes(req.user.role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Access forbidden' });
    }
    next();
  };
  
