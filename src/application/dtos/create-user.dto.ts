import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @AutoMap({ type: () => String })
  email!: string;

  @IsString()
  @AutoMap(() => String)
  password!: string;
}
