import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Length } from 'class-validator'

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
