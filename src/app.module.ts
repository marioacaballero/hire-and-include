import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { SkillModule } from './user/complements/skill/skill.module';
import { LanguageModule } from './user/complements/language/language.module';
import { EducationModule } from './user/complements/education/education.module';
import { JobExperiencieModule } from './user/complements/job-experience/job-experiencie.module';
import { AuthModule } from './auth/auth.module';
import { ProfileController } from './profile/controllers/profile.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    JobModule,
    CompanyModule,
    SkillModule,
    LanguageModule,
    EducationModule,
    JobExperiencieModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [ProfileController],
})
export class AppModule {}
