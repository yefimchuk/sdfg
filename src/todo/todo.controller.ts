import {
    Body,
    Controller, Delete, Get, HttpCode, Param,
    Post, Put, Query,
} from '@nestjs/common';
import { TodoService } from "./todo.service";
import { TodoDto } from "./dto/todo.dto";
import { Todo } from "../schemas/todo.schema";


@Controller('todo')
export class TodoController {
    constructor(private readonly feedbackService: TodoService) {
    }

    @Post('/add')
    @HttpCode(200)
    addTodo(@Body() res: TodoDto): Promise<Todo> {
        return this.feedbackService.addTodo(res);
    }

    @Get('/')
    @HttpCode(200)
    getTodo(@Body() res: TodoDto, @Query() query): Promise<Array<Todo>> {
        return this.feedbackService.getTodos(res, query);
    }

    @Delete('/delete')
    deleteTodo(@Query() query): Promise<TodoDto> {
        return this.feedbackService.deleteTodo(query);
    }
    @Put('/important')
    importantTodo(@Query() query): Promise<any> {
        return this.feedbackService.importantTodo(query);
    }
    @Put('/completed')
    completedTodo(@Query() query): Promise<TodoDto> {
        return this.feedbackService.completedTodo(query);
    }

}