import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ActivityAreaEntity } from 'src/job/complements/activity-area/entities/activity-areas.entity';

//Entidad para cargar el perfil de Empresa
@Entity({ name: 'companies' })
export class CompanyEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @Column()
  bussinessName: string; //razon social

  @Column()
  IDnumber: number; //CUIL/CUIT

  @Column()
  address: string; //domicilio

  @Column()
  phone: number; //telefono

  @Column()
  web: string; //sitio web

  @Column()
  socialMedia: string; //RRSS

  @Column()
  cityAndCountry: string; //localidad, provincia, pais

  @Column({ default: true })
  isONG: boolean; //para identificar si es ONG

  //Relationships
  @ManyToOne(() => ActivityAreaEntity, (area) => area.company)
  activityArea: ActivityAreaEntity; //area de actividad
}
