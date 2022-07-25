import { Module } from '@nestjs/common';
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { MongooseModule } from '@nestjs/mongoose';

import { Registration, RegistrationSchema } from "../schemas/registration.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }])],
    providers: [LoginService],
    controllers: [LoginController],
})
export class LoginModule {}