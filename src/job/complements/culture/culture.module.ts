import { Module } from '@nestjs/common';
import { CultureService } from './services/culture.service';

@Module({
  providers: [CultureService],
})
export class CultureModule {}
