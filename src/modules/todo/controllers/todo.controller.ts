import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Controller('todo')
@ApiUseTags('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

    @Get()
    @ApiResponse({
        status: 201,
        description: 'The record list returns.',
    })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    getAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.create(createTodoDto);
    }

    @Put('/:id')
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully updated.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    update(@Param('id') id: number, @Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.update(id, createTodoDto);
    }

    @Delete('/:id')
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully deleted.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id: number) {
        return this.todoService.delete(id);
    }
}
