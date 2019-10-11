import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async read(id: number): Promise<Todo> {
        return await this.todoRepository.findOne({ where: { id } });
    }

    async create(createTodoDto: CreateTodoDto) {
        const todoEntity = new Todo();
        todoEntity.title = createTodoDto.title;
        todoEntity.description = (createTodoDto.description ? createTodoDto.description : '');
        const todo = this.todoRepository.create(todoEntity);
        await this.todoRepository.save(todo);
        return todo;
    }

    async update(id: number, data: Partial<CreateTodoDto>) {
        await this.todoRepository.update({ id }, data);
        const todo = await this.todoRepository.findOne({ where: { id }});
        return todo;
    }

    async delete(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });
        await this.todoRepository.delete({ id });
        return todo; 
    }
}
