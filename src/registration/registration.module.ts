import { Module } from '@nestjs/common';
import { RegistrationController } from "./registration.controller";
import { RegistrationService } from "./registration.service";
import { MongooseModule } from '@nestjs/mongoose';
import { Registration, RegistrationSchema } from "../schemas/registration.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }])],
    providers: [RegistrationService],
    controllers: [RegistrationController],
})
export class RegistrationModule {}