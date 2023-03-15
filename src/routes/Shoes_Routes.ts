import { Router } from 'express';
import { getShoes, getShoesById, createShoes, updateShoes, deleteShoes } from '../controller/Shoes_Controller';

export const routerShoes: Router = Router();

routerShoes.get('/', getShoes);
routerShoes.get('/:id', getShoesById);
routerShoes.post('/', createShoes);
routerShoes.put('/:id', updateShoes);
routerShoes.delete('/:id', deleteShoes);

