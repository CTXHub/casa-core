import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@Unique(['name'])
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
