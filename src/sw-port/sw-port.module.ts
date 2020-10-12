import { Module } from '@nestjs/common';
import { SwPortController } from './sw-port.controller';
import { SwPortService } from './sw-port.service';
import { MongooseModule } from "@nestjs/mongoose";
import { SwPortSchema } from "./schemas/sw-port.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'SwPort', schema: SwPortSchema}
    ])
  ],
  controllers: [SwPortController],
  providers: [SwPortService]
})
export class SwPortModule {}
