import { UserRepository } from '../repositories/userRepository';
import { User } from '../models/user';

export class UserService {
  private userRepository = new UserRepository();

  async createUser(data: Partial<User>): Promise<User> {
    return this.userRepository.create(data);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}