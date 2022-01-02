import { rideStatus } from "src/types/types";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Ride extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: "text", enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"]})
    status: rideStatus;
    
    @Column({type: "text"})
    pickUpAddress:string;
    
    @Column({type: "double precision", default: 0})
    PickUpLat: number;
    
    @Column({type: "double precision", default: 0})
    PickUpLng:string;
    
    @Column({type: "text"})
    dropOffAddress:string;
    
    @Column({type: "double precision", default: 0})
    dropOffLat: number;
    
    @Column({type: "double precision", default: 0})
    dropOffLng: number;
    
    @Column({type: "double precision", default: 0})
    price: number;
    
    @Column({type: "text"})
    distance:string;
    
    @Column({type: "text"})
    duration:string;

    @ManyToOne(() => User, user => user.ridesAsPassenger)
    passenger: User;

    @ManyToOne(() => User, user => user.ridesAsDriver)
    driver: User;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}

