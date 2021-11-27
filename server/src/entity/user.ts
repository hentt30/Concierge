import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
} from 'typeorm';
import {Length} from 'class-validator';

@Entity()
@Unique(['spotifyId'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  spotifyId: string;


  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
