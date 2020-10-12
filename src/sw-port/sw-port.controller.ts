import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { CreateSwPortDTO } from './dto/sw-port.dto';
import { SwPortService } from './sw-port.service'

@Controller('sw-port')
export class SwPortController {

  constructor(private swPortService: SwPortService){

  }

  @Post('/create')
  async createSwport(@Res() res, @Body() createSwPortDTO: CreateSwPortDTO) {
   const newSwPort = await this.swPortService.createSwPort(createSwPortDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Created Successfully',
      newSwPort: newSwPort
    });
  }

  @Get('/')
  async getSwPortsAll(@Res() res){
    const allSwPorts = await this.swPortService.getSwPortAll();
    res.status(HttpStatus.OK).json({
      allSwPorts
    })
  }
}
