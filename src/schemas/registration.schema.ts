import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);