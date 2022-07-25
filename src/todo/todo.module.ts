import { Module } from '@nestjs/common';
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { MongooseModule } from '@nestjs/mongoose';

import { Registration, RegistrationSchema } from "../schemas/registration.schema";
import { TodoSchema } from "../schemas/todo.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])], //todo correct that instead of ref in schema,i copy reg
    providers: [TodoService],
    controllers: [TodoController],
})
export class TodoModule {}