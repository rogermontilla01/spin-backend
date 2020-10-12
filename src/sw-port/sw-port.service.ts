import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { SwPortInterface } from "./interfaces/sw-port.interface";
import { CreateSwPortDTO } from "./dto/sw-port.dto";

@Injectable()
export class SwPortService {

    constructor(@InjectModel('SwPort') private swPortModel: Model<SwPortInterface>){}
    
    async getSwPortAll(): Promise<SwPortInterface[]>{
        const allSwPorts = await this.swPortModel.find()
        return allSwPorts;
    }

    async getSwPort(swPortID: string): Promise<SwPortInterface>{
        const swPort = await this.swPortModel.findById(swPortID);
        return swPort;
    }

    async createSwPort(createSwPortDTO: CreateSwPortDTO): Promise<SwPortInterface>{
        const newSwPort = new this.swPortModel(createSwPortDTO);
        return await newSwPort.save();
    }

    async deleteSwPort(swPortID: string): Promise<SwPortInterface>{
      const swPortDeleted = await this.swPortModel.findByIdAndDelete(swPortID);
      return swPortDeleted;
    }

    async updateSwPort(swPortID: string, updateSwPortDTO: CreateSwPortDTO ): Promise<SwPortInterface>{
      const swPortUpdated = await this.swPortModel.findByIdAndUpdate(swPortID, updateSwPortDTO, {new: true});
      return swPortUpdated;
    }

}
