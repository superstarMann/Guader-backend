import createJWT from "../../../utils/createJWT";
import { User } from "../../../entities/User"
import { EamilSignInResponse, EmailSignInMutationArgs } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

export const resolvers: Resolvers = {
    Mutation :{
        EmailSignIn: async (
            _, args: EmailSignInMutationArgs
        ): Promise<EamilSignInResponse> => {
            const {email, password} = args;
            try{
                const user = await User.findOne({email});
                if(!user){
                    return{
                        ok: false,
                        error: `No User found with that email`,
                        token: null
                    }
                }
                const checkPassword = await user.comparePassword(password);
                if(!checkPassword){
                    return{
                        ok: false,
                        error: `Wrong Password`,
                        token: null
                    }
                }
                const token = createJWT(user.id);
                return{
                    ok: true,
                    error: null,
                    token
                }
            }catch(error){
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
}