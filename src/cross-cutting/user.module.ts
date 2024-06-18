import { Module } from '@nestjs/common';
import { UserController } from 'src/api/controller/user.controller';
import { UserProfile } from 'src/application/mappers/user.profile';
import { UserAppService } from 'src/application/services/user-app.service';
import { UserService } from 'src/domain/service/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserAppService, UserService, UserProfile],
})
export class UserModule {}
