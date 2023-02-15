import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findOneByUsername(username: string): Promise<User> {
    //find user by username
    return await this.userModel.findOne({ username: username }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async addContact(
    id: string,
    phone: number,
    name: string,
    address: string,
  ): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, {
      $push: { addressBook: { name: name, address: address, phone: phone } },
    });
  }

  async removeContact(id: string, name: string): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, {
      $pull: { addressBook: { name: name } },
    });
  }
}
