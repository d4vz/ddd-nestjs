import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MapperModule } from './automapper.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    MapperModule,
    UserModule,
  ],
})
export class AppModule {}
