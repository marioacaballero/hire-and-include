import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurposeService } from './services/purpose.service';
import { PurposeEntity } from './entities/purpose.entity';
import { PurposeController } from './controllers/purpose.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PurposeEntity])],
  providers: [PurposeService],
  controllers: [PurposeController],
})
export class PurposeModule {}
