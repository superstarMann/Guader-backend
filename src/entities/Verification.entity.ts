import { verificationTarget } from "src/types/types";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
export class Verification extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", enum: [PHONE, EMAIL]})
    target: verificationTarget;

    @Column({type: "text"})
    payload: string;

    @Column({type: "boolean", default: false})
    verified: boolean;

    @Column({type: "text"})
    key: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    upadtedAt: string;

    @BeforeInsert()
    createKey(): void{
        if(this.target === EMAIL){
            this.key = Math.random().toString(36).substr(2);
        }else if(this.target === PHONE){
            this.key = Math.floor(Math.random()*10000).toString();
        }
    }

}