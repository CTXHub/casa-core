import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Binary } from 'typeorm'
import { Length } from 'class-validator'
import { Location } from './Location'

@Entity()
@Unique(['name'])
export class Stadium {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Length(1, 128)
    name: string;

    @Column()
    @Length(1, 4000)
    description: string;

    @Column()
    stadiumImage: string;

    @ManyToOne(type => Location, location => location.stadiums)
    location: Location;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
