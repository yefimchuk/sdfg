import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoDto } from "./dto/todo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "../schemas/todo.schema";
import { Registration, RegistrationDocument } from "../schemas/registration.schema";
import * as fs from "fs";

@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {
    }

    async addTodo(res: TodoDto) {
        let {userId}: any = res;
        return new this.todoModel({owner: userId, text: res.text, completed: false, important: false}).save();

    }

    async getTodos(res: TodoDto, query: { userId: string }) {
        try {

            const {userId} = query;
            return await this.todoModel.find({owner: userId});

        } catch (err) {
            console.error(err);
        }
    }

    async deleteTodo(query: { id: string }) {
        try {
            const {id} = query;
            return await this.todoModel.findByIdAndDelete({_id: id});
        } catch (err) {
            console.error(err);
        }
    }

    async importantTodo(query: { id: string }) {
        try {
            const {id} = query;
            const todo: {important: boolean, save: Function} = await this.todoModel.findOne({_id: id});
            todo.important = !todo.important
            return todo.save()

        } catch (err) {
            console.error(err);
        }
    }

    async completedTodo(query: { id: string }) {
        try {
            const {id} = query;
            const todo: {completed: boolean, save: Function} = await this.todoModel.findOne({_id: id});
            todo.completed = !todo.completed
            return todo.save()
        } catch (err) {
            console.error(err);
        }
    }

}