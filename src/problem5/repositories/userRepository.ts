import prisma from '../config/database';
import { User } from '../models/user';

export class UserRepository {
    async create(data: Partial<User>): Promise<User> {
        return prisma.user.create({ data });
    }

    async findAll(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async findById(id: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        return prisma.user.update({ where: { id }, data });
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({ where: { id } });
    }
}