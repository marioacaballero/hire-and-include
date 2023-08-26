import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../config/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ACCESLEVEL, PROFILETYPE } from '../../constants/enums/profile';
import { EarUsEntity } from '../complements/ear-us/entities/ear-us.entity';

// Entidad para completar el perfil de logeo / registro

// Revisar y/o cambiar los enums que no van y pasarlos a relaciones
@Entity({ name: 'profile' })
export class ProfileEntity extends BaseEntity {
  @Column({ unique: true })
  email: string; //correo

  @Exclude()
  @Column()
  password: string; //contraseña

  @Column({ type: 'enum', enum: PROFILETYPE, default: PROFILETYPE.INVITADO })
  profileType: PROFILETYPE; //perfil

  @Column({ type: 'enum', enum: ACCESLEVEL, default: ACCESLEVEL.PUBLICO })
  accesLevel: ACCESLEVEL; //nivel de acceso

  // Relationships
  @ManyToOne(() => EarUsEntity, (ear) => ear.profile)
  earUs: EarUsEntity; //relacion con como nos conociste

  @OneToOne(() => UserEntity, (user) => user.profile)
  @JoinColumn()
  userProfile: UserEntity; //relacion con postulante

  @OneToOne(() => CompanyEntity, (company) => company.profile)
  @JoinColumn()
  companyProfile: CompanyEntity; //relacion con empresa
}
