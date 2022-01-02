import { BaseEntity,  CreateDateColumn,  Entity,  OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./Messag";
import { User } from "./User.entity";

@Entity()
export class Chat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Message, message => message.chat)
    messages: Message[]

    @OneToMany(() => User, user => user.chat)
    participants: User[];

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}