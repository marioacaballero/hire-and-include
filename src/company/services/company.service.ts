import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CompanyDTO, CompanyUpdateDTO } from '../../company/dto/company.dto';
import { ErrorManager } from '../../helpers/error.manager';
import { CompanyEntity } from '../../company/entities/company.entity';
// import { ActivityAreaService } from '../../job/complements/activity-area/services/activity-area.service';
import { ProfileCompanyService } from 'src/profile/services/profile-company.service';

export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
    private readonly profileService: ProfileCompanyService, // private readonly activityAreaService: ActivityAreaService,
  ) {}

  //crear una nueva empresa
  public async createOne(body: CompanyDTO): Promise<CompanyEntity> {
    try {
      const profile = await this.profileService.findOne(body.profile.id);
      // if (profile.companyProfile) {
      //   throw new ErrorManager({
      //     type: 'BAD_REQUEST',
      //     message: 'The profile has an company',
      //   });
      // }
      body.profile = profile;

      // const cuilExist = await this.companyRepository.find({
      //   where: { IDnumber: body.IDnumber },
      // });
      // if (cuilExist.length) {
      //   throw new ErrorManager({
      //     type: 'BAD_REQUEST',
      //     message: 'The IDnumber is on database',
      //   });
      // }

      // await this.activityAreaService.findOne(body.activityArea.id);

      const company = await this.companyRepository.save(body);
      if (!company) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The company is not created',
        });
      }

      return this.findOne(company.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las empresas de la db
  public async findAll(): Promise<CompanyEntity[]> {
    try {
      const allcompanies = await this.companyRepository.find();
      if (!allcompanies.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have companies on database",
        });
      }
      return allcompanies;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una empresa en particular
  public async findOne(id: string): Promise<CompanyEntity> {
    try {
      const company = await this.companyRepository
        .createQueryBuilder('company')
        .where({ id })
        .leftJoinAndSelect('company.profile', 'profile')
        .leftJoinAndSelect('company.job', 'job')
        .getOne();

      if (!company) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company with ID: ${id} do not exist`,
        });
      }

      return company;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una empresa en particular
  public async updateOne(
    id: string,
    body: CompanyUpdateDTO,
  ): Promise<CompanyEntity> {
    try {
      const company: UpdateResult = await this.companyRepository.update(
        id,
        body,
      );
      if (!company.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una empresa (soft)
  public async deleteOne(id: string): Promise<CompanyEntity> {
    try {
      const company: UpdateResult = await this.companyRepository.update(id, {
        isActive: false,
      });
      if (!company.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
