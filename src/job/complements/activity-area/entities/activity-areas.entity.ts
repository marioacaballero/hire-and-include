import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { CompanyEntity } from '../../../../company/entities/company.entity';

//Entidad para cargar los campos de Areas de Actividad: Como Ingenieria, Legales, Turismo, etc
@Entity({ name: 'activity_area' })
export class ActivityAreaEntity extends BaseEntity {
  @Column({ unique: true })
  name: string; //nombre del area

  //Relationships
  @OneToMany(() => CompanyEntity, (company) => company.activityArea)
  company: CompanyEntity[];
}
