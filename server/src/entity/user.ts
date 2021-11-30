import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({unique: true})
  spotifyId:string;


  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
