import { Module } from '@nestjs/common';
import { GenreModule } from './complements/genre/genre.module';
import { DisabilityModule } from './complements/disability/disability.module';
import { PurposeModule } from './complements/purpose/purpose.module';
import { KnowledgeLevelModule } from './complements/knowledge-level/knowledge-level.module';

@Module({
  imports: [GenreModule, DisabilityModule, PurposeModule, KnowledgeLevelModule],
})
export class UserModule {}
