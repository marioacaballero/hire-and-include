import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { SkillModule } from './skill/skill.module';
import { LanguageModule } from './language/language.module';
import { EducationModule } from './education/education.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    JobModule,
    CompanyModule,
    SkillModule,
    LanguageModule,
    EducationModule,
  ],
})
export class AppModule {}
