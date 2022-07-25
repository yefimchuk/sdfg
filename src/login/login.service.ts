import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from "./dto/login-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Registration, RegistrationDocument } from "../schemas/registration.schema";
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

@Injectable()
export class LoginService {

    constructor(@InjectModel(Registration.name) private regModel: Model<RegistrationDocument>) {
    }

    async loginUser(regDto: LoginUserDto) {

        let {email, password} = regDto;
        const user = await this.regModel.findOne({email});

        if (!user) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'No such account',
                }, HttpStatus.BAD_REQUEST);
        }
        let isMatch = bcrypt.compareSync(password, user.password); // true
        if (!isMatch) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Incorrect password',
            }, HttpStatus.BAD_REQUEST);
        }
        const jwtSecret = process.env.JWT_SECRET
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
        return {token, userId: user.id}

    }

}