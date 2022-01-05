import User from "../../../entities/User";
import { ToggleWalkingModeResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        ToggleWalkingMode: privateResolver(
            async( _, __, {req}): Promise<ToggleWalkingModeResponse> =>{
                const user: User = req.user;
                try{
                    user.isWalking = !user.isWalking;
                    user.save();
                    return{
                        ok: true,
                        error: null
                    }
                }catch(error){
                    return{
                        ok: false,
                        error: null
                    }
                }
            }
        )
    }
}