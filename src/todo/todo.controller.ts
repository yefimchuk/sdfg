import {
    Body,
    Controller, HttpCode,
    Post,
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
    @Post('/add')
    @HttpCode(200)
    getTodo(@Body() res: TodoDto): Promise<Todo> {
        return this.feedbackService.addTodo(res);
    }

}