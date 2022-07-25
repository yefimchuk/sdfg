import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {
    @IsEmail()
    @IsString()
    email: number;
    @IsString()
    @IsNotEmpty()
    password: string;
}