import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegistrationUserDto } from "./dto/registration-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Registration, RegistrationDocument } from "../schemas/registration.schema";

const bcrypt = require('bcryptjs');

@Injectable()
export class RegistrationService {

    constructor(@InjectModel(Registration.name) private regModel: Model<RegistrationDocument>) {
    }

    async registrationUser(regDto: RegistrationUserDto): Promise<Registration> {

        let {email, password} = regDto;
        const isUsed = await this.regModel.findOne({email});
        if (isUsed) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This email already exist.',
            }, HttpStatus.FORBIDDEN);
        }

        password = await bcrypt.hash(password, 8)

        return new this.regModel({email, password});

    }

}