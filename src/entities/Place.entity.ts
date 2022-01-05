import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User.entity";

@Entity()
export class Place extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    name: string;

    @Column({type: "text"})
    address: string;

    @Column({type: "double precision", default: 0})
    lat: number;

    @Column({type: "double precision", default: 0})
    lng: number;

    @Column({type: "boolean", default: false})
    isFav: boolean;

    @Column({ nullable: true })
    userId: number;
  
    @ManyToOne(type => User, user => user.places)
    user: User;
    
    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}