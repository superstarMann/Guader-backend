import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { RequestProtectMutationArgs, RequestProtectResponse } from "../../../types/graph";
import privateResolver from "../../../utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";

export const resolvers: Resolvers= {
    Mutation:{
        RequestProtect: privateResolver(
            async(
                _, args: RequestProtectMutationArgs, {req, pubSub}
                ): Promise<RequestProtectResponse> => {
                    const user: User = req.user
                   if(!user.isProtecting){
                    try{
                        const ride = await Ride.create({...args, passenger: user}).save()
                        pubSub.publish("protectRequest", {NearByProtectSubscription: ride})
                        user.isProtecting = true;
                        user.save()
                        return{
                            ok: true,
                            error: null,
                            ride
                        }
                    }catch(error){
                        return{
                            ok: false,
                            error: null,
                            ride: null
                        }
                    }
                   }else{
                       return{
                           ok: false,
                           error: `You can't request two things`,
                           ride: null
                       }
                   }
            }
        )
    }
}
