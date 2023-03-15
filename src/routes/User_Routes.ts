import { Router } from 'express';
import { signIn, signUp } from '../controller/User_Controller';

export const routerUser: Router = Router();

routerUser.post('/signin', signIn);
routerUser.post('/signup', signUp);

