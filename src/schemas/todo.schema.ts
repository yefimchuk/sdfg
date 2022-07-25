import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes, Types } from 'mongoose';
import { Registration } from "./registration.schema";

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({type: SchemaTypes.ObjectId, ref: 'Registration'})
    owner: string;
    @Prop()
    text: string;

    @Prop()
    completed: false;

    @Prop()
    important: false;

}

export const TodoSchema = SchemaFactory.createForClass(Todo);