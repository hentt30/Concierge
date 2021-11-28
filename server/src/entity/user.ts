import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['spotifyId'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spotifyId: string;


  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
