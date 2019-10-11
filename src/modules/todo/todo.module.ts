import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { Todo } from './entities/todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController],
})
export class TodoModule { }
