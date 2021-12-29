import { IsEmail } from "class-validator";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    @IsEmail()
    email: string | null

    @Column({type: "text"})
    password: string

    @Column({type: "text"})
    firstName: string

    @Column({type: "text"})
    lastName: string
    
    @Column({type: "text", "nullable": true})
    age: string
    
    @Column({type: "text", nullable: true})
    phoneNumber: string
    
    @Column({type: "text"})
    profilePhoto: string

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean
        
    @Column({type: 'boolean', default: false})
    verifiedEmail: boolean
        
    @Column({type: "boolean", default: false})
    isWalking: boolean
    
    @Column({type: "boolean", default: false})
    isProtecting: boolean
    
    @Column({type: "boolean", default: false})
    isTaken: boolean
    
    @Column({type: "double precision", default: 0})
    lastLng: number
    
    @Column({type: "double precision", default: 0})
    lastLat: number
    
    @Column({type: "double precision", default: 0})
    lastorientation: number
    
    @Column({type: "text", nullable: true})
    fbId: string
    
    @CreateDateColumn()
    createdAt: string
    
    @UpdateDateColumn()
    updatedAt: string

    get fullName():string {
        return`${this.firstName} ${this.lastName}`
    }    

    @BeforeInsert()
    @BeforeUpdate()
    public comparePassword(password: string): Promise<Boolean> {
        return bcrypt.compare(password, this.password);
    }

    async savePassword(): Promise<void> {
        if(this.password){
            const hashedPassword = await this.hashPassword(this.password)
            this.password = hashedPassword;
        }
    }

    private hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 10)
    }


}