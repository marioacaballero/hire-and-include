import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';

// Entidad para completar el perfil de Postulante / Independiente

// Revisar y/o cambiar los enums que no van y pasarlos a relaciones
@Entity({ name: 'profile' })
export class ProfileEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // Relationships
}
