import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import Repository from './Repository';

@Entity('issues')
class Issue {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @ManyToOne(() => Repository)
  @JoinColumn({ name: 'repository_id' })
  repository_id: string;
}

export default Issue;
