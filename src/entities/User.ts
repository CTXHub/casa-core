import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsEmail, MinLength, Length } from 'class-validator'

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  GUEST = 'guest'
}

@Entity()
@Unique(['username'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Length(1, 128)
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @MinLength(8)
    password: string;

    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.GUEST
    })
    role: UserRole

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
