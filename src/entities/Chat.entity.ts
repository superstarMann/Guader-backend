import { BaseEntity,  PrimaryGeneratedColumn } from "typeorm";

export class Chat extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


}