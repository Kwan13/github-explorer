import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('owners')
class Owner {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Column()
  avatar_url: string;
}

export default Owner;
