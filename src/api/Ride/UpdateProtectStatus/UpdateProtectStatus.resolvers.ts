import { Chat } from "../../../entities/Chat";
import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { UpdateProtectStatusMutationArgs, UpdateProtectStatusResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation:{
        UpdateProtectStatus: privateResolver(
            async(
                _, args:UpdateProtectStatusMutationArgs, {req, pubSub}
            ): Promise<UpdateProtectStatusResponse> => {
                const user: User = req.user;
                if(user.isProtecting){
                    try{
                        let ride: Ride | undefined;
                        if(args.status === "ACCEPTED"){
                            ride = await Ride.findOne({
                                id: args.rideId,
                                status: "REQUESTING"
                            },{relations: ["passenger"]}
                            )
                            if(ride){
                                ride.guader = user;
                                user.isTaken = true;
                                user.save()
                                const chat = await Chat.create({
                                    guader: user,
                                    passenger: ride.passenger
                                }).save()
                                ride.chat = chat;
                                ride.save()
                            }
                        }else{
                            ride = await Ride.findOne({
                                id: args.rideId,
                                guader: user
                            })
                        }
                        if(ride){
                            ride.status = args.status,
                            ride.save()
                            pubSub.publish("protectUpdate", {ProtectStatusSubscription: ride})
                            return{
                                ok: true,
                                error: null
                            }
                        }else{
                            return{
                                ok: false,
                                error: `Can't update status`
                            }
                        }
                    }catch(error){
                        return{
                            ok: false,
                            error: error.message
                        }
                    }
                }else{
                    return{
                        ok: false,
                        error: `You are not protecting`
                    }
                }
            }
        )
    }
}
