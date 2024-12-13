import express from 'express';
import {createUser2 } from '../controller/PersonsController.js';
import  {verifyToken}  from '../middleware/auth.js';

const rotuer = express.Router();

rotuer.post('/registerP', createUser2);

export const RouterPerson = rotuer;