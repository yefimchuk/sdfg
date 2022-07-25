import {
    Body,
    Controller, HttpCode,
    Post,
} from '@nestjs/common';
import { LoginService } from "./login.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { Registration } from "../schemas/registration.schema";
import { Login } from "../schemas/login.schema";


@Controller()
export class LoginController {
    constructor(private readonly feedbackService: LoginService) {}

    @Post('/login')
    @HttpCode(200)
    registration(@Body() createMessageDTO: LoginUserDto): Promise<{ userId: string; token: string }> {
        return this.feedbackService.loginUser(createMessageDTO);
    }

}