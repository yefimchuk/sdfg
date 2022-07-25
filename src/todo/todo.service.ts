import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoDto } from "./dto/todo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "../schemas/todo.schema";
import { Registration, RegistrationDocument } from "../schemas/registration.schema";

@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {
    }

    async addTodo(res: TodoDto) {
        let {userId}: any = res;
        return new this.todoModel({owner: userId, text: res.text, completed: false, important: false});

    }


}