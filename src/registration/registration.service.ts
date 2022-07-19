import { Injectable } from '@nestjs/common';

import { RegistrationUserDto } from "./dto/registration-user.dto";

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Registration, RegistrationDocument } from "../schemas/registration.schema";


@Injectable()
export class RegistrationService {
    constructor(@InjectModel(Registration.name) private regModel: Model<RegistrationDocument>) {}

    async registrationUser(createCatDto: RegistrationUserDto): Promise<Registration> {

        let a = this.regModel.findOne({
            name: 'dimda',
        })
        return a
    }


}