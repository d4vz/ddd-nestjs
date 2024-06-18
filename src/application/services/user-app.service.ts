import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/service/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserAppService {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.mapper.map(createUserDto, CreateUserDto, User);
    return this.userService.createUser(user);
  }
}
