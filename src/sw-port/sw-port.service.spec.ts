import { Test, TestingModule } from '@nestjs/testing';
import { SwPortService } from './sw-port.service';

describe('SwPortService', () => {
  let service: SwPortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwPortService],
    }).compile();

    service = module.get<SwPortService>(SwPortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
