import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    text: string;


}