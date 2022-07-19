import { IsString, IsNumber } from 'class-validator';

export class RegistrationUserDto {
    @IsString()
    readonly username: string;

    @IsNumber()
    readonly password: string;
}