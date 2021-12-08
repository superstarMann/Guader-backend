import { BaseEntity, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./Message";
import { User } from "./User";

@Entity()
export class Chat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Message, message => message.chat)
    messages: Message[]

    @OneToMany(() => User, user => user.chat)
    participants: User[]

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}