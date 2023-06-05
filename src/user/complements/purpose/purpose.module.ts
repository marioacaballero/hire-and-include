import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurposeService } from './services/purpose.service';
import { PurposeEntity } from './entities/purpose.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurposeEntity])],
  providers: [PurposeService],
})
export class PurposeModule {}
