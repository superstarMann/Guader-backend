import { cleanNullArgs } from "../../../utils/cleanNullArgs";
import User from "../../../entities/User";
import { UpdateMyProfileMutationArgs, UpdateMyProfileResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation : {
        UpdateMyProfile: privateResolver(
            async(
                _, args: UpdateMyProfileMutationArgs, {req}
            ): Promise<UpdateMyProfileResponse> => {
                const user: User = req.user;
                const notNull = cleanNullArgs(args)
                try{
                    if (args.password !== null) {
                        user.password = args.password;
                        user.save();
                      }
                    await User.update({id: user.id}, {...notNull});
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