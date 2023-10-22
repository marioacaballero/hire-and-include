import { Column, Entity /*, ManyToOne */ } from 'typeorm';
import { Exclude } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';
import { BaseEntity } from '../../config/base.entity';
// import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';

@Entity({ name: 'profile-company' })
export class ProfileCompanyEntity extends BaseEntity {
  @Column()
  firstName: string; //nombre

  @Column()
  lastName: string; //apellido

  @Column({ unique: true })
  email: string; //correo*

  @Exclude()
  @Column()
  @MinLength(5)
  @MaxLength(13)
  password: string; //contraseña*

  @Column({ default: 'hire and include' })
  name: string; //nombre de la empresa

  @Column({ default: 'hire and include' })
  bussinessName: string; //razon social

  // @ManyToOne(() => ActivityAreaEntity, (area) => area.company)
  // activityArea: ActivityAreaEntity; //area de actividad

  @Column()
  fiscalCondition: string; //condicion fiscal

  @Column({ unique: true })
  IDnumber: string; //CUIL/CUIT

  @Column({ default: 'buenos aires, argentina' })
  address: string; //dirección

  @Column({ default: 'parana, entre rios, argentina' })
  cityAndCountry: string; //localidad, provincia, pais

  @Column()
  postalCode: string; //codigo postal

  @Column({ default: '' })
  phone: string; //telefono

  @Column({ default: '' })
  socialMedia: string; //RRSS

  @Column({ default: 'www.hireandinclude.com' })
  web: string; //sitio web

  @Column()
  integration: boolean; //apoyo a la integracion

  @Column()
  news: boolean; //recibir novedades

  @Column({ default: false })
  isONG: boolean; //para identificar si es ONG
}
