import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

// model
import Repository from './Repository';

@Entity('owners')
class Owner {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  login: string;

  @OneToMany(() => Repository, repository => repository.owner)
  repository: Repository;

  @Column()
  avatar_url: string;
}

export default Owner;
