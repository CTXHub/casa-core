import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Length } from 'class-validator'
import { Stadium } from './Stadium'

@Entity()
@Unique(['name'])
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Length(1, 128)
    name: string;

    @Column()
    @Length(1)
    description: string;

    @Column()
    country: string;

    @OneToMany(type => Stadium, stadium => stadium.location)
    stadiums: Stadium[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
