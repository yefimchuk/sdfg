import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
    @Prop()
    name: string;

    @Prop()
    password: number;

}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);