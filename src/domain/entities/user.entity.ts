import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  id!: string;

  @AutoMap()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  password!: string;
}
