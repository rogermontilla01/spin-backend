import { Test, TestingModule } from '@nestjs/testing';
import { SwPortController } from './sw-port.controller';

describe('SwPortController', () => {
  let controller: SwPortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwPortController],
    }).compile();

    controller = module.get<SwPortController>(SwPortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
