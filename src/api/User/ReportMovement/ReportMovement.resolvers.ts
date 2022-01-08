import { cleanNullArgs } from "../../../utils/cleanNullArgs";
import User from "../../../entities/User";
import { ReportMovementMutationArgs, ReportMovementResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        ReportMovement: privateResolver(
            async(
                _, args:ReportMovementMutationArgs, {req, pubSub}
            ): Promise<ReportMovementResponse> =>{
                const user: User = req.user;
                const notNull = cleanNullArgs(args)
                try{
                    await User.update({id: user.id}, {...notNull})
                    const updateUser = await User.findOne({id: user.id})
                    pubSub.publish("guaderUpdate", {GuaderSubscription: updateUser})
                    return{
                        ok: true,
                        error: null
                    }
                }catch(error){
                    return{
                        ok: false,
                        error: error.message
                    }
                }
            }
        )
    }
}