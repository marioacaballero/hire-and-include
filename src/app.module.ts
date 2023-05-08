import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { SkillModule } from './user/complements/skill/skill.module';
import { LanguageModule } from './user/complements/language/language.module';
import { EducationModule } from './user/complements/education/education.module';
import { JobExperiencieModule } from './user/complements/job-experiencie/job-experiencie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    JobModule,
    CompanyModule,
    SkillModule,
    LanguageModule,
    EducationModule,
    JobExperiencieModule,
  ],
})
export class AppModule {}
