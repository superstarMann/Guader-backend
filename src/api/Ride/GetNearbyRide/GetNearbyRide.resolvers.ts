import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { Between, getRepository } from "typeorm";
import { GetNearbyRideResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolver: Resolvers = {
    Query:{
        GetNearbyRide: privateResolver(
            async(
                _, __, {req}
            ): Promise<GetNearbyRideResponse> => {
               const user: User = req.user;
               if(user.isWalking){
                   const {lastLat, lastLng} = user
                   try{
                       const ride = await getRepository(Ride).findOne({
                           status: "REQUESTING",
                           pickUpLat: Between(lastLat - 0.05, lastLat + 0.05),
                           pickUpLng: Between(lastLng - 0.05, lastLng + 0.05)
                       })
                       if(ride){
                        return{
                            ok: true,
                            error: null,
                            ride
                        }
                       }else{
                           return{
                               ok: true,
                               error: null,
                               ride: null
                           }
                       }
                   }catch(error){
                       return{
                           ok: false,
                           error: error.message,
                           ride: null
                       }
                   }
               }else{
                 return{
                     ok: false,
                     error: `You ar not driver`,
                     ride: null
                 }    
               }
            }
        )
    }
}