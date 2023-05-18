import { OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { ProfileEntity } from '../../../../profile/entities/profile.entity';

export class EarUsEntity extends BaseEntity {
  name: string; //nombre de la red social, etc

  //Relationships
  @OneToMany(() => ProfileEntity, (profile) => profile.earUs)
  profile: ProfileEntity[]; //relacion con el perfil
}
