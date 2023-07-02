import User from "interfaces/User";
import { NextFunction, Request, Response } from 'express';

const users: User[] = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ]; 


  export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
  
    const token = authHeader.slice(7);
    const decodedToken = Buffer.from(token, 'base64').toString();
    const [email, password] = decodedToken.split(':');
  
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    next();
  } 
  
  //Testing token : dXNlcjFAZXhhbXBsZS5jb206cGFzc3dvcmQx
