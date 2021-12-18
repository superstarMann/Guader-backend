import { Resolvers } from "../../../types/resolvers";
import {CompleteVerificationResponse, CompleteVerificationMutationArgs} from "../../../types/graph";
import { Verification } from "../../../entities/Verification.entity";
import { User } from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

export const resolvers: Resolvers = {
    Mutation: {
        CompleteVerification: async(
            _, args: CompleteVerificationMutationArgs
        ):Promise<CompleteVerificationResponse> => {
            const {phoneNumber, key} = args
            try{
                const verification = await Verification.findOne({
                    payload: phoneNumber,
                    key
                })
                if(!verification){                    
                    return{
                        ok: false,
                        error: `Verification Key not valid`,
                        token: null
                    }
                }else{
                    verification.verified = true
                    verification.save()
                }
            }catch(error){
                return{
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
            try{
                const user = await User.findOne({phoneNumber})
                if(user){
                    user.verifiedPhoneNumber = true;
                    user.save();
                    const token = createJWT(user.id);
                    return{
                        ok: true,
                        error: null,
                        token
                    }
                }else{
                    return{
                        ok: true,
                        error: null,
                        token: null
                    }
                }
            }catch(error){
                return{
                    ok: false,
                    error: error.message,
                    token: null
                };
            }

        }
    }
}