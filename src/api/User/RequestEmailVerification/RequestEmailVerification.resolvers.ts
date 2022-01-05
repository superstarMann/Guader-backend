import { Verification } from "../../../entities/Verification.entity";
import { sendVerificationEmail } from "../../../utils/sendEmail";
import User from "../../../entities/User.entity";
import { RequestEmailVerificationResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        RequestEmailVerification: privateResolver(
            async(_, __, {req}): Promise<RequestEmailVerificationResponse> =>{
                const user:User = req;
                if(user.email && !user.verifiedEmail){
                    try{
                        const oldVerification  = await Verification.findOne({
                            payload: user.email
                        });
                        if(oldVerification){
                            oldVerification.remove();
                        }
                        const newVerification = await Verification.create({
                            payload: user.email,
                            target: "EMAIL"
                        }).save()
                        await sendVerificationEmail(user.fullName, newVerification.key)
                        return{
                            ok: true,
                            error: null
                        };
                    }catch(error){
                        return{
                            ok: false,
                            error: error.message
                        }
                    }
                }else{
                    return{
                        ok: false,
                        error: `Your user has no email to verify`
                    }
                }
            }
        )
    }
}