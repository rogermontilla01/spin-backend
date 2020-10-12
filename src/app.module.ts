import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwPortModule } from './sw-port/sw-port.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [SwPortModule, MongooseModule.forRoot('mongodb://localhost/spin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
