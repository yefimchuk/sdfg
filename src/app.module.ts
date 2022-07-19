import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationModule } from "./registration/registration.module";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        RegistrationModule,
        MongooseModule.forRoot(process.env.MONGODB_PATH),

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
