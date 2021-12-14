import { verificationTarget } from "src/types/types";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const PHONE = "PHONE"
const EMAIL = "EMAIL"

@Entity()
export class Verification extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", enum: [PHONE, EMAIL]})
    target: verificationTarget;

    @Column({type: "text"})
    payload: string;

    @Column({type: "text"})
    key: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @BeforeInsert()
    createKey(): void{
        if(this.target === PHONE){
            this.key = Math.floor(Math.random() * 1000).toString();
        }else if(this.target === EMAIL){
            this.key = Math.random().toString(36).substr(2)
        }
    }

}