import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import Owner from './Owner';

@Entity('repositories')
class Repository {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('integer')
  stargazers_count: number;

  @Column('integer')
  forks_count: number;

  @Column('integer')
  open_issues_count: number;

  @ManyToOne(() => Owner, owner => owner.repository, { eager: true })
  @JoinColumn({ name: 'owner_id' })
  owner: Owner;

  @Column('uuid')
  owner_id: string;
}

export default Repository;
