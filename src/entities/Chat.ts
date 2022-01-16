import { BaseEntity,  Column,  CreateDateColumn,  Entity,  ManyToOne,  OneToMany,  OneToOne,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./Message";
import Ride from "./Ride";
import User from "./User";

@Entity()
export class Chat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Message, message => message.chat, {nullable: true})
    messages: Message[]

    @ManyToOne(() => User, user => user.chatAsPassenger)
    passenger: User;

    @Column({nullable: true})
    passengerId: number;

    @ManyToOne(() => User, user => user.chatAsGuader)
    guader: User;

    @Column({nullable: true})
    guaderId: number;

    @OneToOne(() => Ride, ride => ride.chat)
    ride: Ride

    @Column({nullable: true})
    rideId: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}