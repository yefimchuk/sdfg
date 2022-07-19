import {
    Body,
    Controller, Get,
    HttpCode,
    HttpStatus,
    Post,
} from '@nestjs/common';

import { RegistrationService } from "./registration.service";
import { RegistrationUserDto } from "./dto/registration-user.dto";
import { Registration } from "../schemas/registration.schema";


@Controller('registration')
export class RegistrationController {
    constructor(private readonly feedbackService: RegistrationService) {}

    @Get()
    @HttpCode(HttpStatus.CREATED)
    registration(@Body() createMessageDTO: RegistrationUserDto): Promise<Registration> {
        return this.feedbackService.registrationUser(createMessageDTO);
    }

}