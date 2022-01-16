import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { GetProtectQueryArgs, GetProtectResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Query:{
        GetProtect: privateResolver(
            async(
                _, args: GetProtectQueryArgs, {req}
            ):Promise<GetProtectResponse> => {
                const user: User = req.user;
                try{
                    const ride = await Ride.findOne({
                        id: args.rideId
                    })
                    if(ride?.passengerId === user.id || ride?.guaderId === user.id){
                        if(ride){
                            return{
                                ok: true,
                                error: null,
                                ride
                            }
                        }else{
                            return{
                                ok: false,
                                error: `Not Authorized`,
                                ride: null
                            }
                        }
                    }else{
                        return{
                            ok: false,
                            error: `Protect not found`,
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
            }
        )
    }
}