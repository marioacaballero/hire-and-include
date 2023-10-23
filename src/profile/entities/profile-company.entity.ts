import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../config/base.entity';
import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ACCESLEVEL, ROLES } from '../../constants/enums/profile';

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
  password: string; //contraseña*

  @Column({ default: 'hire and include' })
  name: string; //nombre de la empresa

  @Column({ default: 'hire and include' })
  bussinessName: string; //razon social

  @ManyToOne(() => ActivityAreaEntity, (area) => area.company)
  activityArea: ActivityAreaEntity; //area de actividad

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

  @Column({ default: false })
  integration: boolean; //apoyo a la integracion

  @Column({ default: false })
  news: boolean; //recibir novedades

  @Column({ default: false })
  isONG: boolean; //para identificar si es ONG

  @OneToOne(() => CompanyEntity, (company) => company.profile)
  @JoinColumn()
  company: CompanyEntity; //relacion con la empresa

  @Column({ type: 'enum', enum: ROLES, default: ROLES.BASIC })
  rol: ROLES; //rol (admin, admin user, basico, etc)

  @Column({ type: 'enum', enum: ACCESLEVEL, default: ACCESLEVEL.PUBLIC })
  accesLevel: ACCESLEVEL; //nivel de acceso
}
