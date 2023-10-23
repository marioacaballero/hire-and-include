import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { ProfileCompanyEntity } from '../../../../profile/entities/profile-company.entity';

//Entidad para cargar los campos de Areas de Actividad: Como Ingenieria, Legales, Turismo, etc
@Entity({ name: 'activity_area' })
export class ActivityAreaEntity extends BaseEntity {
  @Column({ unique: true })
  name: string; //nombre del area

  //Relationships
  @OneToMany(() => ProfileCompanyEntity, (company) => company.activityArea)
  company: ProfileCompanyEntity[];
}
