import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../config/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ACCESLEVEL, ID_TYPE, ROLES } from '../../constants/enums/profile';
import { EarUsEntity } from '../complements/ear-us/entities/ear-us.entity';

// Entidad para completar el perfil de logeo / registro del usuario postulante
@Entity({ name: 'profile' })
export class ProfileEntity extends BaseEntity {
  @Column()
  firstName: string; //nombre

  @Column()
  lastName: string; //apellido

  @Column({ type: 'enum', enum: ID_TYPE })
  IDnumberType: ID_TYPE; //tipo de documento*

  @Column({ unique: true })
  IDnumber: string; //DNI/CUIL/PASAPORTE*

  @Column()
  cityAndCountry: string; //localidad, provincia, pais*

  @Column()
  birthdate: Date; //fecha de nacimiento*

  @Column()
  phone: string; //telefono*

  @Column({ default: '' })
  socialMedia: string; //RRSS

  @Column({ default: '', length: 1000 })
  about: string; //sobre mi

  @Column({ unique: true })
  email: string; //correo*

  @Exclude()
  @Column()
  password: string; //contraseña*

  @Column({ default: false })
  news: boolean; //recibir novedades

  @Column({ type: 'enum', enum: ROLES, default: ROLES.BASIC })
  rol: ROLES; //rol (admin, admin user, basico, etc)

  @Column({ type: 'enum', enum: ACCESLEVEL, default: ACCESLEVEL.PUBLIC })
  accesLevel: ACCESLEVEL; //nivel de acceso

  // Relationships
  @ManyToOne(() => EarUsEntity, (ear) => ear.profile)
  @JoinColumn({ name: 'earUsId' })
  earUs: EarUsEntity; //relacion con como nos conociste

  @OneToOne(() => UserEntity, (user) => user.profile)
  @JoinColumn()
  userProfile: UserEntity; //relacion para completar el perfil de usuario

  @ManyToOne(() => CompanyEntity, (company) => company.userRelation)
  @JoinColumn({ name: 'companyRelationId' })
  companyRelation: CompanyEntity; // relacion directa para saber si pertenece o no a una empresa
}
