import User from "../../../entities/User";
import { ToggleWalkingModeMutationArgs, ToggleWalkingModeResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        ToggleWalkingMode: privateResolver(
            async( _, args: ToggleWalkingModeMutationArgs, {req}): Promise<ToggleWalkingModeResponse> =>{
                const user: User = req.user;
                const existingUser = await User.findOne({id: args.userId})
                if(existingUser){
                    if(existingUser.id === user.id){
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
                    }else{
                        return{
                            ok: false,
                            error: `User is not match`
                        }
                    }
                }else{
                    return{
                        ok: false,
                        error: `Not Found User`
                    }
                }
            }
        )
    }
}