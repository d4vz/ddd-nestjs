import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        CreateUserDto,
        User,
        forMember(
          (destination) => destination.id,
          mapFrom(() => uuidv4()),
        ),
      );
    };
  }
}
