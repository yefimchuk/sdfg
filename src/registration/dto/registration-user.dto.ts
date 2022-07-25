import { IsString, IsNumber, MinLength, IsNotEmpty, IsEmail } from 'class-validator';

export class RegistrationUserDto {
    @IsEmail()
    @IsString()
    email: number;
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;
}