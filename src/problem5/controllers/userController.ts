import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.json(user);
};

export const getUsers = async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
};