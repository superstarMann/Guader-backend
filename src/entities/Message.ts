import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./Chat";
import User from "./User";


@Entity()
export class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    text: string;

    @ManyToOne(() => Chat, chat => chat.messages)
    chat: Chat;

    @Column({nullable: true})
    chatId: number;

    @ManyToOne(() => User, user => user.messages)
    user: User;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;


}