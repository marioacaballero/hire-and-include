import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1687046680385 implements MigrationInterface {
  name = 'Init1687046680385';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`activity_area\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`skills\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, \`level_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`knowledge-level\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`language\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, \`level_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`education-level\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, \`education_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`education\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`institution\` varchar(255) NOT NULL, \`diploma\` varchar(255) NOT NULL, \`graduation_year\` int NOT NULL, \`state\` enum ('INCOMPLETE', 'IN_PROGRESS', 'FINISHED') NOT NULL, \`education_degree_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`charge\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`job-relation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`jobmode\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`disability\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`job-user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_id\` int NULL, \`job_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`culture\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`jobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, \`about\` varchar(255) NOT NULL, \`salary\` varchar(255) NOT NULL, \`requirements\` varchar(255) NOT NULL, \`tasks\` varchar(255) NOT NULL, \`inclusion_program\` varchar(255) NOT NULL, \`benefits\` varchar(255) NOT NULL, \`work_schedule\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`minority\` tinyint NOT NULL DEFAULT 0, \`minority_detail\` varchar(255) NOT NULL, \`seniority_id\` int NULL, \`type_id\` int NULL, \`culture_id\` int NULL, \`job_relation_id\` int NULL, \`job_mode_id\` int NULL, \`disability_id\` int NULL, \`company_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`seniority\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`job-experience\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`position\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`performance\` varchar(255) NOT NULL, \`achievement\` varchar(255) NOT NULL, \`start\` datetime NOT NULL, \`end\` datetime NOT NULL, \`seniority_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`genres\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purpose\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`photo\` varchar(255) NOT NULL, \`birthdate\` datetime NOT NULL, \`phone\` int NOT NULL, \`social_media\` varchar(255) NOT NULL, \`about\` varchar(255) NOT NULL, \`minority\` tinyint NOT NULL DEFAULT 0, \`minority_detail\` varchar(255) NOT NULL, \`d_bconsent\` tinyint NOT NULL DEFAULT 1, \`job_state\` enum ('TENGO_Y_BUSCO', 'NO_TENGO_Y_BUSCO', 'NO_TENGO') NOT NULL DEFAULT 'NO_TENGO', \`city_and_country\` varchar(255) NOT NULL, \`i_dnumber\` int NOT NULL, \`purpose_id\` int NULL, \`genre_id\` int NULL, \`disability_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`ear-us\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`profile_type\` enum ('INVITADO', 'POSTULANTE_PRESTADOR', 'EMPRESA', 'ONG', 'ADMIN') NOT NULL DEFAULT 'INVITADO', \`acces_level\` enum ('10', '20', '30', '40', '50') NOT NULL DEFAULT '10', \`ear_us_id\` int NULL, UNIQUE INDEX \`IDX_3825121222d5c17741373d8ad1\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`is_active\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(255) NOT NULL, \`logo\` varchar(255) NOT NULL, \`bussiness_name\` varchar(255) NOT NULL, \`i_dnumber\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`web\` varchar(255) NOT NULL, \`social_media\` varchar(255) NOT NULL, \`city_and_country\` varchar(255) NOT NULL, \`is_ong\` tinyint NOT NULL DEFAULT 1, \`activity_area_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users_languages_language\` (\`users_id\` int NOT NULL, \`language_id\` int NOT NULL, INDEX \`IDX_80e648102a3754ca1b64d5014c\` (\`users_id\`), INDEX \`IDX_234274393537d15dfcb1ec3282\` (\`language_id\`), PRIMARY KEY (\`users_id\`, \`language_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users_skills_skills\` (\`users_id\` int NOT NULL, \`skills_id\` int NOT NULL, INDEX \`IDX_2bbead70476d8f9021d1b0ff63\` (\`users_id\`), INDEX \`IDX_87bbfd059c608293c2866741bc\` (\`skills_id\`), PRIMARY KEY (\`users_id\`, \`skills_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`skills\` ADD CONSTRAINT \`FK_93076ddc3e59fa76036ba893b50\` FOREIGN KEY (\`level_id\`) REFERENCES \`knowledge-level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`language\` ADD CONSTRAINT \`FK_9171b9f17b9a3679a2a61c059c6\` FOREIGN KEY (\`level_id\`) REFERENCES \`knowledge-level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`education-level\` ADD CONSTRAINT \`FK_b7a6e64d9683667366b68611cf0\` FOREIGN KEY (\`education_id\`) REFERENCES \`education\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`education\` ADD CONSTRAINT \`FK_414fa3a6d85942578cfc1ab671b\` FOREIGN KEY (\`education_degree_id\`) REFERENCES \`education-level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`education\` ADD CONSTRAINT \`FK_5bfcef10ecdda36d2ee68aa2049\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-user\` ADD CONSTRAINT \`FK_34d89205d5283f48aa774005033\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-user\` ADD CONSTRAINT \`FK_8546edeee0bd1633fca4f4f2a17\` FOREIGN KEY (\`job_id\`) REFERENCES \`jobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_1803dafdda7c3906e186b159178\` FOREIGN KEY (\`seniority_id\`) REFERENCES \`seniority\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_0cfab40cd790fb33e4f9192025b\` FOREIGN KEY (\`type_id\`) REFERENCES \`charge\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_ae0bf805c3067a23abcf3e12b3d\` FOREIGN KEY (\`culture_id\`) REFERENCES \`culture\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_e6909b4414e1c0c6239004ed2b4\` FOREIGN KEY (\`job_relation_id\`) REFERENCES \`job-relation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_149d1d2d3668684ec624a8c59da\` FOREIGN KEY (\`job_mode_id\`) REFERENCES \`jobmode\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_98aa28059330256aa2eda0c1af9\` FOREIGN KEY (\`disability_id\`) REFERENCES \`disability\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_087a773c50525e348e26188e7cc\` FOREIGN KEY (\`company_id\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-experience\` ADD CONSTRAINT \`FK_87b4ab354e84ffb61c8ff17a6ae\` FOREIGN KEY (\`seniority_id\`) REFERENCES \`seniority\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-experience\` ADD CONSTRAINT \`FK_afde1d96d830a2bd9e62a7b3416\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_5d1dcff4cf36f110ae9f7e0fb07\` FOREIGN KEY (\`purpose_id\`) REFERENCES \`purpose\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_5be277044acc503ca6f5ff2a23e\` FOREIGN KEY (\`genre_id\`) REFERENCES \`genres\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_ac50095785b35d610b7c5caa266\` FOREIGN KEY (\`disability_id\`) REFERENCES \`disability\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_332715750c9c2d44a1c0188d774\` FOREIGN KEY (\`ear_us_id\`) REFERENCES \`ear-us\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_e78aeec0eee5e74a6e443babd74\` FOREIGN KEY (\`activity_area_id\`) REFERENCES \`activity_area\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_languages_language\` ADD CONSTRAINT \`FK_80e648102a3754ca1b64d5014c8\` FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_languages_language\` ADD CONSTRAINT \`FK_234274393537d15dfcb1ec32824\` FOREIGN KEY (\`language_id\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_skills_skills\` ADD CONSTRAINT \`FK_2bbead70476d8f9021d1b0ff632\` FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_skills_skills\` ADD CONSTRAINT \`FK_87bbfd059c608293c2866741bcc\` FOREIGN KEY (\`skills_id\`) REFERENCES \`skills\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users_skills_skills\` DROP FOREIGN KEY \`FK_87bbfd059c608293c2866741bcc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_skills_skills\` DROP FOREIGN KEY \`FK_2bbead70476d8f9021d1b0ff632\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_languages_language\` DROP FOREIGN KEY \`FK_234274393537d15dfcb1ec32824\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_languages_language\` DROP FOREIGN KEY \`FK_80e648102a3754ca1b64d5014c8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_e78aeec0eee5e74a6e443babd74\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_332715750c9c2d44a1c0188d774\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_ac50095785b35d610b7c5caa266\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_5be277044acc503ca6f5ff2a23e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_5d1dcff4cf36f110ae9f7e0fb07\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-experience\` DROP FOREIGN KEY \`FK_afde1d96d830a2bd9e62a7b3416\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-experience\` DROP FOREIGN KEY \`FK_87b4ab354e84ffb61c8ff17a6ae\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_087a773c50525e348e26188e7cc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_98aa28059330256aa2eda0c1af9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_149d1d2d3668684ec624a8c59da\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_e6909b4414e1c0c6239004ed2b4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_ae0bf805c3067a23abcf3e12b3d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_0cfab40cd790fb33e4f9192025b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_1803dafdda7c3906e186b159178\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-user\` DROP FOREIGN KEY \`FK_8546edeee0bd1633fca4f4f2a17\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`job-user\` DROP FOREIGN KEY \`FK_34d89205d5283f48aa774005033\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`education\` DROP FOREIGN KEY \`FK_5bfcef10ecdda36d2ee68aa2049\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`education\` DROP FOREIGN KEY \`FK_414fa3a6d85942578cfc1ab671b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`education-level\` DROP FOREIGN KEY \`FK_b7a6e64d9683667366b68611cf0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`language\` DROP FOREIGN KEY \`FK_9171b9f17b9a3679a2a61c059c6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`skills\` DROP FOREIGN KEY \`FK_93076ddc3e59fa76036ba893b50\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_87bbfd059c608293c2866741bc\` ON \`users_skills_skills\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_2bbead70476d8f9021d1b0ff63\` ON \`users_skills_skills\``,
    );
    await queryRunner.query(`DROP TABLE \`users_skills_skills\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_234274393537d15dfcb1ec3282\` ON \`users_languages_language\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_80e648102a3754ca1b64d5014c\` ON \`users_languages_language\``,
    );
    await queryRunner.query(`DROP TABLE \`users_languages_language\``);
    await queryRunner.query(`DROP TABLE \`companies\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_3825121222d5c17741373d8ad1\` ON \`profile\``,
    );
    await queryRunner.query(`DROP TABLE \`profile\``);
    await queryRunner.query(`DROP TABLE \`ear-us\``);
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`purpose\``);
    await queryRunner.query(`DROP TABLE \`genres\``);
    await queryRunner.query(`DROP TABLE \`job-experience\``);
    await queryRunner.query(`DROP TABLE \`seniority\``);
    await queryRunner.query(`DROP TABLE \`jobs\``);
    await queryRunner.query(`DROP TABLE \`culture\``);
    await queryRunner.query(`DROP TABLE \`job-user\``);
    await queryRunner.query(`DROP TABLE \`disability\``);
    await queryRunner.query(`DROP TABLE \`jobmode\``);
    await queryRunner.query(`DROP TABLE \`job-relation\``);
    await queryRunner.query(`DROP TABLE \`charge\``);
    await queryRunner.query(`DROP TABLE \`education\``);
    await queryRunner.query(`DROP TABLE \`education-level\``);
    await queryRunner.query(`DROP TABLE \`language\``);
    await queryRunner.query(`DROP TABLE \`knowledge-level\``);
    await queryRunner.query(`DROP TABLE \`skills\``);
    await queryRunner.query(`DROP TABLE \`activity_area\``);
  }
}
