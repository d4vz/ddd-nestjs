import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/create-user.dto';
import { UserAppService } from 'src/application/services/user-app.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserAppService) private readonly userAppService: UserAppService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userAppService.createUser(createUserDto);
  }
}
