import { Module } from '@nestjs/common';
import { CultureService } from './services/culture.service';
import { CultureController } from './controllers/culture.controller';

@Module({
  providers: [CultureService],
  controllers: [CultureController],
})
export class CultureModule {}
