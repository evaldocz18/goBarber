import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Evaldo de Souza',
    email: 'evaldocz18@gmail.com',
    password_hash: '123456',
  });
  console.log(user);
  return res.json(user);
});

export default routes;
