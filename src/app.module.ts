import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3333,
    username: 'nestuser',
    password: 'nestpwd',
    database: 'nest',
    entities: [
      'dist/**/**.entity.js',
    ],
    // logging: true,
    synchronize: true,
    /*
    dropSchema: true,
    keepConnectionAlive: true,
    retryAttempts: 2,
    retryDelay: 1000,
    */
  }),TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
