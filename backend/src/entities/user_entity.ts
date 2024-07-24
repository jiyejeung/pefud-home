import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, default: '' })
  walletAddress!: string;

  @Column({ nullable: false, default: 0 })
  playingTime!: number;

  @Column({ nullable: true, default: '0' })
  bonesAmount!: string;

  @Column({ nullable: false, default: '0' })
  zenAmount!: string;
}
